export const inputHandler = evt => {
  const { name, value } = evt.currentTarget;

  setState(prev => {
    return { ...prev, [name]: value };
  });
};

export const formSubmitHandler = ({ name, number }) => {
  const normalizedNameValue = name.toLowerCase();
  const normalizedNamesArr = contacts.map(contact =>
    contact.name.toLowerCase()
  );

  if (normalizedNamesArr.includes(normalizedNameValue)) {
    toast.error(`${name} is already in the list`);
    return false;
  } else {
    dispatch(addContact({ name, number }));

    return true;
  }
};

export const submitHandler = evt => {
  evt.preventDefault();

  if (formSubmitHandler(state)) {
    setState({ name: '', number: '' });
  } else {
    setState(prev => {
      return { name: '', number: prev.number };
    });
  }
};
