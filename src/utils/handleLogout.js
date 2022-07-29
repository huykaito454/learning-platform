export default function handleLogout() {
  localStorage.clear();
  window.location.reload(false);
}
