import { Section } from "components/Utilits";
import { Component } from "react";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContacts = (contact) => {
    const { contacts } = this.state;
    const inputName = contact.name.toLowerCase();
    const names = contacts.map((item) => item.name.toLowerCase());

    if (names.includes(inputName)) {
      alert(`"${contact.name}" is already in contacts !`);
      return;
    }
    this.setState({ contacts: [...contacts, contact] });
  };

  removeContact = (e) => {
    const id = e.target.parentNode.id;

    const { contacts } = this.state;

    // const index = contacts.map((item) => item.id).indexOf(id);
    // this.setState({ contacts: [...contacts].splice(index, 1) });

    this.setState({
      contacts: contacts.filter((elem) => {
        return elem.id !== id;
      }),
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((elem) => {
      return elem.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  onFilterInput = ({ target: { value: filter } }) => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;

    const { addContacts, filterContacts, onFilterInput, removeContact } = this;
    return (
      <>
        <div>
          <Section title="Phonebook">
            <Form addContacts={addContacts} />
          </Section>
          <Section>
            <Filter filter={filter} onFilterInput={onFilterInput} />
          </Section>
          <Section title="Contacts">
            <Contacts items={filterContacts()} removeContact={removeContact} />
          </Section>
        </div>
      </>
    );
  }
}

export default PhoneBook;
