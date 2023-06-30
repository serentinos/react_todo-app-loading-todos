export const ErrorNotification = () => {
  return (
    <div className="notification is-danger is-light has-text-weight-normal">
      <button
        aria-label="Close notification"
        type="button"
        className="delete"
      />

      {/* show only one message at a time */}
      Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo
    </div>
  );
};