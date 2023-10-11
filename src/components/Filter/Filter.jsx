import styled from 'styled-components';
import Container from '../Container/Container.jsx';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <ContainerSearch>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search name"
      />
    </ContainerSearch>
  );
};

export default Filter;

const ContainerSearch = styled(Container)`
  width: 400px;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 20px;
  color: #fff;
  background-color: blue;
  );
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  opacity: 0.5;
`;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
