import React from 'react';
import "./PlaningProgressBar.scss";
import cs from "classnames";

const PlaningProgressBar = React.memo(({category, events}) => {

    const getPercent = () => {
        const percent = ((100 * events) / category.capacity).toFixed(0);
        return percent > 100 ? 100 : percent;
    };

    const getColoClass = () => {
        const percent = getPercent();
      return percent <= 33 ? "success" : percent > 33 && percent < 66 ? "warning" : "danger";
    };

    return (
        <div className="row">
            <div className="col-xs-6">
                <div className="n-progress">
                    <div className={cs("progress-bar ", `${getColoClass()}`)} style={{width: `${getPercent()}%`}}>
                        <span>{category.name}</span>
                    </div>
                </div>
            </div>
            <div className="col-xs-6">
                <p>
                    <span className={`text-${getColoClass()}`}>{events}</span>
                    из
                    <span className="text-primary">{category.capacity}</span>
                    |
                    a ramas <span className={`text-${getColoClass()}`}>
                    {
                        category && events && (category.capacity - events)
                    }
                </span> (MDL)
                </p>
            </div>
        </div>
    );
});

export default PlaningProgressBar;