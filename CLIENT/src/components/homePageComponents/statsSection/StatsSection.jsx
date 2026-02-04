import "./StatsSection.css";

export default function StatsSection(){
  return(
    <section className="stats">
      <div className="flex flex-col items-center justify-center">
        <span className="text-8xl">500+</span>
        <span>centers</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-8xl">10k+</span>
        <span>Patients</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-8xl">99%</span>
        <span>Satisfaction</span>
      </div>
    </section>
  )
}
