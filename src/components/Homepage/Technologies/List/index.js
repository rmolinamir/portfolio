import CheckboxIcon from 'components/SVG/Icons/Checkbox';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const PROFICIENCY_RECREATIONAL = 'recreational';
export const PROFICIENCY_LIMITED_PRODUCTION = 'limited';
export const PROFICIENCY_ADVANCED_PRODUCTION = 'advanced';
export const PROFICIENCY_EXPERT = 'expert';

export default function List(props) {
  const { list } = props;
  return (
    <StyledList>
      {list.map(({ name, proficiency }) => (
        <StyledItem
          key={name}
        >
          <span className="checkbox">
            <StyledCheckbox
              proficiency={proficiency}
            />
          </span>
          <span className="item">
            {name}
          </span>
        </StyledItem>
      ))}
    </StyledList>
  );
}

List.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

const StyledList = styled.ul`
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
  .checkbox {
    display: inline-block;
    margin-right: 0.585rem;
    padding-top: 0.125rem;
  }
  .item {
    display: inline-block;
    flex: 1;
  }
`;

const StyledCheckbox = styled(CheckboxIcon)`
  fill: ${({ theme, proficiency }) => theme[proficiency]}
`;
