import * as THREE from "three"
import { MTLLoader } from "three/addons/loaders/MTLLoader.js"
import { OBJLoader } from "three/addons/loaders/OBJLoader.js"

import carModelUrl from "./gameAssets/golfCart.glb?url"
import bambooMtl from "./gameAssets/nature2/Bamboo_4.mtl?raw"
import bambooObj from "./gameAssets/nature2/Bamboo_4.obj?raw"
import cactusMtl from "./gameAssets/nature2/Cactus_3.mtl?raw"
import cactusObj from "./gameAssets/nature2/Cactus_3.obj?raw"
import bushMtl from "./gameAssets/nature2/BushBerries_4.mtl?raw"
import bushObj from "./gameAssets/nature2/BushBerries_4.obj?raw"
import flowerMtl from "./gameAssets/nature2/Flower_4.mtl?raw"
import flowerObj from "./gameAssets/nature2/Flower_4.obj?raw"
import grassMtl from "./gameAssets/nature2/Grass_4.mtl?raw"
import grassObj from "./gameAssets/nature2/Grass_4.obj?raw"
import mushroomMtl from "./gameAssets/nature2/Mushroom_3.mtl?raw"
import mushroomObj from "./gameAssets/nature2/Mushroom_3.obj?raw"
import palmAltMtl from "./gameAssets/nature2/PalmTree_2.mtl?raw"
import palmAltObj from "./gameAssets/nature2/PalmTree_2.obj?raw"
import palmMtl from "./gameAssets/nature2/PalmTree_4.mtl?raw"
import palmObj from "./gameAssets/nature2/PalmTree_4.obj?raw"

type NatureAsset = {
  obj: string
  mtl: string
}

export { carModelUrl }

export const NATURE_ASSETS = {
  palm: { obj: palmObj, mtl: palmMtl },
  palmAlt: { obj: palmAltObj, mtl: palmAltMtl },
  bamboo: { obj: bambooObj, mtl: bambooMtl },
  cactus: { obj: cactusObj, mtl: cactusMtl },
  bush: { obj: bushObj, mtl: bushMtl },
  grass: { obj: grassObj, mtl: grassMtl },
  flower: { obj: flowerObj, mtl: flowerMtl },
  mushroom: { obj: mushroomObj, mtl: mushroomMtl },
} satisfies Record<string, NatureAsset>

export async function loadNatureAsset(asset: NatureAsset) {
  const materials = new MTLLoader().parse(asset.mtl, "")
  materials.preload()
  const model = new OBJLoader().setMaterials(materials).parse(asset.obj)

  model.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return
    object.castShadow = true
    object.receiveShadow = true
    const meshMaterials = Array.isArray(object.material) ? object.material : [object.material]
    meshMaterials.forEach((material) => {
      if (!(material instanceof THREE.MeshPhongMaterial)) return
      const hsl = { h: 0, s: 0, l: 0 }
      material.color.getHSL(hsl)
      material.color.setHSL(
        hsl.h,
        Math.min(0.82, hsl.s * 1.05),
        Math.min(0.68, Math.max(0.2, hsl.l * 1.55 + 0.08))
      )
      material.emissive.copy(material.color).multiplyScalar(0.035)
      material.specular.setScalar(0.06)
      material.shininess = 6
      material.side = THREE.DoubleSide
    })
  })

  return model
}

export async function preloadExploreAssets() {
  const response = await fetch(carModelUrl, { cache: "force-cache" })
  if (!response.ok) throw new Error(`Unable to preload ${carModelUrl}`)
  await response.blob()
}
