import PropTypes from "prop-types";
import { Component } from "react";
import { Item } from "components/Utilits";

class Contacts extends Component {
  render() {
    const { items, removeContact } = this.props;
    return (
      <>
        <ul>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                contactsList={item}
                removeContact={removeContact}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

Contacts.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default Contacts;