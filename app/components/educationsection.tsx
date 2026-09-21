export function EducationSection()
{
    return (
        <div className="h-32 w-200 bg-mist-200 rounded-lg shadow-xl flex items-center gap-2">
          <div>
            <img src="./bit.png" className="h-30 w-30"/>
          </div>
          <div>
          <p className="font-Rubik text-primary text-3xl">
            Bangalore Institute of Technology
          </p>
          <p className="font-Rubik text-primary text-xl">
            BE in Computer Science and Data Science
          </p>
          <p className="font-Rubik text-primary text-xl">
            CGPA: (9.68/10)
          </p>
          </div>
        </div>
    )
}