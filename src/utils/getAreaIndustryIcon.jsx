import { ReactComponent as Architecture } from "../assets/industry/arhitrcura.svg";
import { ReactComponent as Art } from "../assets/industry/art.svg";
import { ReactComponent as CustomerService } from "../assets/industry/customer-service.svg";
import { ReactComponent as Design } from "../assets/industry/design.svg";
import { ReactComponent as Game } from "../assets/industry/game.svg";
import { ReactComponent as Ispolnitelskoe } from "../assets/industry/ispolnitelskoe.svg";
import { ReactComponent as IzdatelskoeDelo } from "../assets/industry/izdatelskoe_delo.svg";
import { ReactComponent as Moda } from "../assets/industry/moda.svg";
import { ReactComponent as Movie } from "../assets/industry/movie.svg";
import { ReactComponent as Reklama } from "../assets/industry/reklama.svg";

const getAreaIndustryIcon = (type) => {
    switch (type) {
        case "arhitrcura":
            return <Architecture />;
        case "art":
            return <Art />;
        case "customer-service":
            return <CustomerService />;
        case "design":
            return <Design />;
        case "game":
            return <Game />;
        case "ispolnitelskoe":
            return <Ispolnitelskoe />;
        case "izdatelskoe_delo":
            return <IzdatelskoeDelo />;
        case "moda":
            return <Moda />;
        case "movie":
            return <Movie />;
        case "reklama":
            return <Reklama />;
        default:
            return <CustomerService />;
    }
};

export default getAreaIndustryIcon;
