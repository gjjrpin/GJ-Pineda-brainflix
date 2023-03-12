import ".././page/NotFoundPage.scss";
import error404 from "../../assets/Images/Error-404.gif";

function NotFoundPage() {
  return (
    <div className="error">
      <h1 className="error__title">Page not found</h1>
      {/* We are importing the src={error404} from import above. */}
      <img className="error__image" src={error404} alt={error404} />
    </div>
  );
}

export default NotFoundPage;
