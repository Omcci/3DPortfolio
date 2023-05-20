import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"



const Tech = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {technologies.map((technology) => (
        <div key={technology.name}>
        {/* // classname="w-2 h-2"> */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech