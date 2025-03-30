import "./profiles.css";
import leetcode from "../../assets/leetcode.webp";
import gfg from "../../assets/GeeksforGeeks.svg";
import cses from "../../assets/cse.svg";
import cfs from "../../assets/cf.png";
const Profiles = () => {
  return (
    <div className="prof-container">
      <div className="text-style">Sharpening Logic, One Problem at a Time</div>
      <div className="box-styles">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={leetcode} alt="LeetCode" className="image" />
          <button
            className="button"
            onClick={() => {
              window.open("https://leetcode.com/u/Dimple_h/", "_blank");
            }}
          >
            Click to view
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <img src={gfg} alt="geeksforgeeks" />
          <button
            className="button"
            onClick={() => {
              window.open(
                "https://www.geeksforgeeks.org/user/harjanid0ich/",
                "_blank"
              );
            }}
          >
            Click to view
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={cses} alt="Cses" className="image" />
          <button
            className="button"
            onClick={() => {
              window.open("https://cses.fi/user/303546", "_blank");
            }}
          >
            Click to view
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={cfs} alt="cfs" className="image" />
          <button
            className="button"
            onClick={() => {
              window.open(
                "https://codeforces.com/profile/dimple_h21",
                "_blank"
              );
            }}
          >
            Click to view
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
