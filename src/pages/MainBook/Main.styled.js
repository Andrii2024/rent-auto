import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #34a1b6;

  border-radius: 10px;
  margin: 40px auto;
  box-shadow: 1px 2px 5px 4px lightblue;
  gap: 10px;
`;
export const StyledButton = styled.button`
  display: block;
  padding: 5px;
  border-radius: 6px;
  background-color: aquamarine;
  box-shadow: 2px 3px 3px whitesmoke;
  border: 1px solid whitesmoke;
  cursor: pointer;
  transition: transform 0.4s;
  width: 180px;
  &:hover {
    background-color: #417866;
    color: whitesmoke;
    box-shadow: 2px 3px 3px skyblue;
    transform: scale(1.1);
  }
`;
export const StyledForm = styled.form`
  border: 1px solid whitesmoke;
  border-radius: 8px;
  box-shadow: 1px 2px 3px 2px whitesmoke;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 221px;
  padding: 15px;
  align-items: center;
`;
export const StyledInput = styled.input`
  width: 200px;
  margin-top: 5px;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px 2px whitesmoke;
`;
export const StyledLabel = styled.label`
  display: flex;
  color: aliceblue;
  margin-bottom: 6px;
  flex-direction: column;
`;
export const StyledLi = styled.li`
  display: flex;
  margin-bottom: 6px;
  align-items: center;
  justify-content: space-between;
`;
export const ContactList = styled.ul``;
export const StyledButtonList = styled.button`
  display: block;
  padding: 2px;
  border-radius: 3px;
  background-color: aquamarine;
  box-shadow: 1px 2px 3px 2px whitesmoke;

  border: 1px solid whitesmoke;
  cursor: pointer;
  transition: transform 0.4s;
  width: 80px;
  &:hover {
    background-color: #417866;
    color: whitesmoke;
    box-shadow: 2px 3px 3px skyblue;
    transform: scale(1.1);
  }
`;
export const StyleH1 = styled.h1`
  text-shadow: 1px 2px 3px whitesmoke;
`;
