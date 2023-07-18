import React from "react";
import { NumericFormat } from "react-number-format";
import "./single.scss"

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { booking } = props;
  return (
    <div ref={ref} className="print-source">
      <div className="d-flex justify-content-between">
        <div>
          <h3>ເຮືອນແພເມືອງເຟືອງ</h3>
          {/* <p>ຮ້ານຄ້າບຸນນະວັດ</p> */}
          <p>ບ້ານໂນນຫິນແຮ່,ເມືອງເຟືອງ,ແຂວງວຽງຈັນ</p>
          <p>ຕິດຕໍ່ +85620 93043691</p>
        </div>
        <div>
          <h3>ລາຍລະອຽດລູກຄ້າ</h3>
          <p>ຊື່: {booking.user.name}</p>
          <p>ອີເມວ {booking.user.email}</p>
          <p>ເບີໂທ: {booking.user.tel}</p>
          <p>ຈຳນວນຄົນທີ່ຈະມາເຂົ້າພັກ: {booking.bookItems[0].qtyPerson} ຄົນ</p>
        </div>
        <div></div>
      </div>
      <table className="table border table-lg" style={{marginTop:"20px"}}>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>ເຮືອນແພ</th>
            <th style={{ width: "20%" }}>ຄ່າມັດຈຳ 20% </th>
            <th style={{ width: "20%" }}>ຈຳນວນຂອງເຮືອນແພ</th>
            <th style={{ width: "30%" }} className="text-end">
              ວັນທີ່ເຊັກອິນ ແລະ ເຊັກເອົ້າ
            </th>
          </tr>
        </thead>
        <tbody>
          {booking.bookItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="info">{item.name}</div>
              </td>
              <td>
                <NumericFormat
                  value={item.deposit}
                  displayType={"text"}
                  thousandSeparator={true}
                /> ກີບ
              </td>
              <td>{item.qty} ຫຼັງ</td>
              <td className="text-end">
                {booking.checkInDate} ຫາ {booking.checkOutDate}
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="4">
              <article className="float-end">
                <dl className="dlist">
                  <dt>ລວມລາຄາທັງໝົດ:</dt>
                  <dd>
                    <NumericFormat
                      value={booking.bookItems[0].price}
                      displayType={"text"}
                      thousandSeparator={true}
                    /> ກີບ
                  </dd>
                </dl>
                {/* <dl className="dlist">
                  <dt>ຄ່າສົ່ງ:</dt>
                  <dd>
                    <NumericFormat
                      value={order.shippingPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₭"}
                    />
                  </dd>
                </dl>
                <dl className="dlist">
                  <dt>ລວມເປັນເງິນທັງໝົດ:</dt>
                  <dd>
                    <b className="h5">
                      <NumericFormat
                        value={order.totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₭"}
                      />
                    </b>
                  </dd>
                </dl> */}
                <dl className="dlist">
                <dt className="text-muted">ສະຖານະການຊຳລະເງິນ:</dt>
                <dd>
                  {
                    booking.isPaid ? (
                      <span className="badge rounded-pill alert alert-success text-success">
                        ຈ່າຍແລ້ວ
                      </span>
                    )
                    :
                    (
                      <span className="badge rounded-pill alert alert-danger text-danger">
                        ຍັງບໍ່ທັນຈ່າຍ
                      </span>
                    )
                  }
                  
                </dd>
              </dl>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center" }}>ຂອບໃຈທີ່ໃຊ້ບໍລິການ</p>
    </div>
  );
});