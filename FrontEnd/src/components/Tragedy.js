import TragedyData from "./TragedyData";
import "./TragedyStyles.css";
import img1 from "../assets/2.png";
function Tragedy() {
  return (
    <>
      <div className="tragedy">
        <h1>Recent Tragedy</h1>
        <p>
        E-Aid it's a charitable a platformn, a community group, or a non-profit, donations provide the resources necessary for these groups to make a difference. They help fund programs, support services, and cover operational costs. Without donations, many of these organizations would not be able to continue their important work. When making a donation, whether it's a one-time gift or a recurring contribution, donors can take comfort in knowing that their generosity is making a real impact in the world.
        </p>
      </div>
      <div className="tragedycard">
        <TragedyData
          heading="Help To Provide Shelter"
          text="Need shelter for the poor children of Karachi. Due to Earth quick all the homes of poor get destroyed.They need constant assistance and support to lift them and their children from the ongoing cycle of poor education, malnutrition and poverty. this is very choatic

"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgSeW4W09l7HsuoVuQjhcxwohfsBtDYOA3bfG6EIQvPH7d9D89kvCIITNVPsdiQUfYEc&usqp=CAU"
        />
        <TragedyData
          heading="Help for Health Operation"
          text="A child have heart problem and need urgent money. Live is very important and helping other when they dont haveehopes from life, be a light in the dark cloud of the child. They do not have the government provided ration cards as they are unaware of the procedures to procure one"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk5PKRoqaXbosXuuQ2hX_9Ck_JxWEuf1orw&usqp=CAU"
        />
        <TragedyData
          heading="Help To Educate"
          text="Lack of education and awareness continues to take a heavy toll on such families. They are just one among the many such families. They need constant assistance and support to lift them and their children from the ongoing cycle of poor education, malnutrition and poverty."
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgSeW4W09l7HsuoVuQjhcxwohfsBtDYOA3bfG6EIQvPH7d9D89kvCIITNVPsdiQUfYEc&usqp=CAU"
        />
      </div>
      <div className="btn1"> <a href="">Donate</a></div>
    </>
  );
}

export default Tragedy;
