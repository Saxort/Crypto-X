import React, { useRef } from "react";
import classes from "./Lending.module.scss";
import Footer from "../../widgets/Footer/Footer";

const Lending = () => {
  
  const blockRef = useRef<HTMLDivElement>(null);
  const desc = [
    {
      title: "Extensive Calendar Views",
      desc: "Easily switch between year, month, week and day views for smooth navigation.",
    },
    {
      title: "Weather at Your Fingertips",
      desc: "Access weather conditions by simply clicking on a day in the calendar.",
    },
    {
      title: " Extraordinary Additional Data",
      desc: "Explore sunset times, moon phases, and other captivating data.",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.title__block}>
        <div>
          <h1 className={classes.title}>-__Time Wise__-</h1>
          <div className={classes.menu}>
            <div>Calendar Magic Awaits.</div>
            <div
              style={{ left: "-37px", cursor: "pointer" }}
              onClick={() =>
                blockRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Now
            </div>
            <div>June 29,2023</div>
          </div>
        </div>
        <div className={classes.title__img} />
      </div>
      <div className={classes.title__description}>
        <div className={classes.titleD} style={{ marginTop: "20vh" }}>
          Mesmerizing Calendar Features
        </div>
        <div className={classes.block}>
          <div style={{ paddingTop: "60px" }}>
            {desc.map(({ title, desc }) => (
              <div className={classes.desciption}>
                <div className={classes.title__desc}>{title}</div>
                <div className={classes.main__desc}>{desc}</div>
              </div>
            ))}
          </div>
          <div className={classes.img__block} />
        </div>

        <div className={classes.block} style={{ paddingTop: "60px" }}>
          <div className={classes.title__description}>
            <div className={classes.titleD}>
              Task Management and Personalization
            </div>
            <div className={classes.main__desc} style={{ paddingTop: "20px" }}>
              Experience seamless task organization with our daily task manager,
              add, edit, and delete tasks effortlessly.
            </div>
          </div>
          <div
            className={classes.img__block}
            style={{
              backgroundImage:
                'url("https://groupccm.com/wp-content/uploads/2021/03/TIME-MANAGEMENT.jpg")',
            }}
          ></div>
        </div>

        <div
          className={classes.block}
          style={{
            paddingTop: "60px",
            justifyContent: "space-between",
            gap: "16vw",
          }}
        >
          <div
            className={classes.img__block}
            style={{
              backgroundImage:
                'url("https://funart.pro/uploads/posts/2021-04/1617308773_16-p-oboi-otlichnaya-pogoda-17.jpg")',
            }}
          ></div>
          <div className={classes.title__description}>
            <div className={classes.titleD}>
              Join the Interactive Calendar App Community
            </div>
            <div className={classes.main__desc} style={{ paddingTop: "20px" }}>
              Sign up or log in to access personalized settings, saved tasks,
              and unleash the full potential of our app.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.title__login} ref={blockRef}>
        <h1 className={classes.titleD} style={{display:'block',fontSize:"65px"} }>Begin Today</h1>
        <h3 className={classes.desc__button}>
          Embark on a journey towards a well-organized life.
        </h3>
        <h3 className={classes.desc__button}>
          Experience the magic of Interactive Calendar App.
        </h3>


        <div className={classes.buttons} >
          <button className={classes.SignUP}>Sign Up</button>
          <button className={classes.LogIn}>Log In</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Lending;
