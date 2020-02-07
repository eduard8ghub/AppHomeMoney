import React from 'react';
import "./HistoryPopupFilter.scss";


const HistoryPopupFilter = (props) => {
    return (
        <div className="modal fade in" onClick={(e)=>{e.target.className === "modal fade in" && props.onChangeVisiblePopup(false)}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={()=>{props.onChangeVisiblePopup(false)}}>
                            <span>×</span>
                        </button>
                        <h4 className="modal-title">Фильтр</h4>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <label className="control-label" htmlFor="period">Выберите период</label>
                            <select className="form-control" id="period">
                                <option>Ultimile 24 ore</option>
                                <option>Ultimile 7 zile</option>
                                <option>Ultimile 4 saptamini</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Выберите тип события</label>
                            <div>
                                <label>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                        <span>Cheltuieli</span>
                                </label>
                                <label>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                    <span>Venit</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Выберите категории</label>
                            <div>
                                <label>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                        <span>Mincare</span>
                                </label>
                                <label>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                    <span>Casa</span>
                                </label>
                                <label>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                    <span>Masina</span>
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=>{props.onChangeVisiblePopup(false)}}>Отмена</button>
                            <button type="button" className="btn btn-primary">Применить</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HistoryPopupFilter;