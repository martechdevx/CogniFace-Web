import desktopLogo from "../assets/cogni-desktop.png";

function BrandLogo({ className, alt = "CogniFace" }) {
  return <img className={className} src={desktopLogo} alt={alt} />;
}

export default BrandLogo;
