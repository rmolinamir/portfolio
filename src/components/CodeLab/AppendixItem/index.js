import PropTypes from 'prop-types';

export default function AppendixItem(props) {
  const { id, title } = props;

  function onLinkClick() {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  return (
    <li style={{ cursor: 'pointer' }}><a role="button" onClick={onLinkClick}>{title}</a></li>
  );
}

AppendixItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
