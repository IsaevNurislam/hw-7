import React from "react";

const Child = ({ styles }) => {
  return (
    <div>
      <h2 style={styles}>Дочерний компонент</h2>
      <p style={styles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor
        doloremque corporis! Quidem, iusto? Optio quae eum ab maiores atque
        dolores, tempore saepe voluptas deserunt earum dolorum repudiandae,
        consectetur veritatis.
      </p>
    </div>
  );
};

export default Child;
