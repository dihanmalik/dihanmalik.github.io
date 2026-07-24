import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
  IconPhone,
  IconBrandTiktok,
} from "@tabler/icons-react"
import { MyTooltip } from "@/components/ui/custom/MyTooltip"
import BorderGlow from "@/components/BorderGlow"
import meImage from "@/assets/me4.png"

export const IntroSection = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-10 md:flex-nowrap md:pt-4">
      <div className="flex flex-1 flex-col items-center gap-4 md:w-[235px] md:flex-none">
        <BorderGlow
          edgeSensitivity={50}
          glowColor="20 80 80"
          backgroundColor="#120F17"
          borderRadius={0}
          glowRadius={45}
          glowIntensity={1.5}
          coneSpread={45}
          animated
          colors={["#c084fc", "#f472b6", "#38bdf8"]}
        >
          <img
            src={meImage}
            alt="Logo"
            className="h-auto w-full select-none [-webkit-user-drag:none]"
          />
        </BorderGlow>

        <div className="flex flex-row justify-evenly gap-4">
          <MyTooltip content="GitHub" side="bottom">
            <a
              className="cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white"
              href="https://github.com/dihanmalik"
              target="_blank"
            >
              <IconBrandGithub size={20} />{" "}
            </a>
          </MyTooltip>
          <MyTooltip content="LinkedIn" side="bottom">
            <a
              className="cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white"
              href="https://www.linkedin.com/in/abdulmaliknahid/"
              target="_blank"
            >
              <IconBrandLinkedin size={20} />
            </a>
          </MyTooltip>
          <MyTooltip content="Gmail" side="bottom">
            <a
              className="cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white"
              href="mailto:abdulmaliknahid@gmail.com"
              target="_blank"
            >
              <IconBrandGmail size={20} />
            </a>
          </MyTooltip>
          <MyTooltip content="Phone" side="bottom">
            <a
              className="cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white"
              href="tel:+639154960703"
              target="_blank"
            >
              <IconPhone size={20} />
            </a>
          </MyTooltip>
          <MyTooltip content="TikTok" side="bottom">
            <a
              className="cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white"
              href="https://www.tiktok.com/@dihanmalik0"
              target="_blank"
            >
              <IconBrandTiktok size={20} />
            </a>
          </MyTooltip>
        </div>
      </div>
      <div className="flex flex-auto flex-col gap-4 pt-2">
        <div>
          <h1 className="text-4xl font-bold">Hi, I'm Nahid Abdulmalik</h1>
          <p className="text-md">
            You can call me <b>Dihan</b>{" "}
            <MyTooltip content="Pure Filipino 😁" side="bottom">
              <span>🇵🇭</span>
            </MyTooltip>
          </p>
        </div>
        <p className="text-md">
          I'm a Frontend Software Developer who's been building applications
          since 2016, mainly using React to create fast, responsive, and
          user-friendly interfaces with a strong focus on performance and
          optimization.
        </p>
        <p className="text-md">
          Over the years, I've continued learning new technologies and improving
          my skills to build clean, scalable applications that deliver a great
          user experience.
        </p>
      </div>
    </div>
  )
}
