type LogoProps = {
  logo: string;
};

const Logo = ({ logo }: LogoProps) => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
