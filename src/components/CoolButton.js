function CoolButton(props) {
  const bulmaClasses = {
    isCentered: "is-centered",
    isActive: "is-active",
    isBlack: "is-black",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white",
  };

  let classes = "button"; // clase base

  classes +=
    " " +
    Object.keys(props)
      .filter((key) => bulmaClasses[key])
      .map((key) => bulmaClasses[key])
      .join(" ");

  return <button className={classes}>{props.children}</button>;
}

export default CoolButton;
