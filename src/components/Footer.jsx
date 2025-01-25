export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <small>Raymond Enriquez ©{year}</small>
    </div>
  );
}
