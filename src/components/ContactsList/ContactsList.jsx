import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = ({ data, onDeleteContact }) => {
  return (
    <ContainerList>
      <Title>Contacts</Title>
      {data.length > 0 ? (
        <Wrapper>
          {data.map(({ id, name, number }, index) => (
            <Item key={id} index={index}>
              {name} : {number}
              <ButtonClose onClick={() => onDeleteContact(id)}>
                &#10007;
              </ButtonClose>
            </Item>
          ))}
        </Wrapper>
      ) : (
        <TextList>No Contacts</TextList>
      )}
    </ContainerList>
  );
};

export default List;

const ContainerList = styled.div`
  margin-top: 5px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 25px;
`;

const Wrapper = styled.ul`
  display: flex;
  margin-top: 20px;
  list-style: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  width: 500px;
  border-radius: 25px;
  color: #fff;
  background-color: ${index => (index.index % 2 !== 0 ? '#0AB3CF' : '#1B59CA')};
`;

const ButtonClose = styled.button.attrs(() => ({
  type: 'button',
}))`
  padding: 5px 7px;
  border-radius: 50%;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
  transform: rotate(180deg);
  }
`;

const TextList = styled.span`
  display: inline-block;
  margin-top: 30px;
  text-align: center;
`;

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
