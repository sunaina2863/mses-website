import { React } from "react";
function CardA({ dataId, urlAchive, name, achivement }) {
  return (
    <>
      <div className="col-md-6" style={{ paddingTop: "40px" }}>
        <div
          className={`card bg-black achivement ${
            dataId % 2 === 0 ? "right-fix" : ""
          }`}
          style={{ margin: "auto" }}
        >
          <img
            class="card-img-top"
            src={urlAchive}
            alt="Card"
            style={{ zIndex: 100 }}
          />
          <div
            className="card-body text-right holder"
            style={{
              background: "linear-gradient(#D9D9D9, #D9D9D9)",
            }}
          >
            <span
              style={{ color: "#2C2B2B", fontWeight: "500", marginTop: "10px" }}
            >
              {name}
            </span>
            <span
              style={{ color: "#21272A", fontWeight: "bold", fontSize: "14px" }}
            >
              {" "}
              {achivement}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardA;
