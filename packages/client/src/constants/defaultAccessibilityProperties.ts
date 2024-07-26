const defaultAccessibilityProperties = {
  tabIndex: 0,
  onKeyDown: (event: React.KeyboardEvent<unknown>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }
  },
};

export { defaultAccessibilityProperties };
