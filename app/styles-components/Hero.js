import styled from "styled-components";

const Hero_Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;
// const Hero_Text = styled.h1<{ $inputColor?: string; }>`
//     text-align: center;
//     font-size: 30px;
//     font-weight: 400;
//     color: ${props => props.$inputColor || "#000000"};
// `;

const Hero_Grad = styled.div`
  background-image: linear-gradient(#00000000, #000000);

  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Hero_wrapper = styled.div`
  background-image: url("/heroImg.png");
  background-size: cover;
  background-position: center;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
`;

export { Hero_wrapper, Hero_Grad, Hero_Title };
