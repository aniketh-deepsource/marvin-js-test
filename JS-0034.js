






if (this.state.isValidToken) {
  authenticate();
} else if (this.state.visited) {
  handleSync();
} else if (this.state.error.code === 500 && this.state.userAction) {
  reload();
} else if (this.state.error.code === 500 && this.state.userAction) {
  reload();
} else {
  clearTmpStates();
}
