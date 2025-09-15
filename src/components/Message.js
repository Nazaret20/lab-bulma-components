import './message.css'

function Message(props) {
  const bulmaClasses = {
    isInfo: "is-info",
    isSuccess: "is-success",
    isWarning: "is-warning",
    isDanger: "is-danger",
  };

  let classes = "message";

  classes +=
    " " +
    Object.keys(props)
      .filter((key) => bulmaClasses[key])
      .map((key) => bulmaClasses[key])
      .join(" ");
  return (
    <>
      <article className={classes}>
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {props.children}
        </div>
      </article>
    </>
  );
}

export default Message;
