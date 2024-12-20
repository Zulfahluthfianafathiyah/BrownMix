import PropTypes from "prop-types";


const NavHeader = (props) => {
    return (
      <>
        <div className="py-8 h-32 bg-greyLight/70">
          <h1 className="px-32 text-secondary text-3xl font-semibold font-Satoshi-Reguler ">
            {props.nav}
          </h1>
          <div className="flex gap-2 px-32 text-secondary text-base font-light font-Satoshi-Light ">
            <h4>{props.page} </h4>
            <h4>{props.pagenav1} </h4>
            <h4>{props.page2} </h4>
            <h4>{props.pagenav2} </h4>
            <h4 className="text-primary">{props.page3} </h4>
          </div>
        </div>
      </>
  );
};

NavHeader.propTypes = {
    nav: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    pagenav1: PropTypes.string,
    page2: PropTypes.string,
    pagenav2: PropTypes.string,
    page3: PropTypes.string
  };

  
  export default NavHeader;
