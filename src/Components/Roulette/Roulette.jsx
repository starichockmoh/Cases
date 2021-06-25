import $ from 'jquery'
import React from 'react'
import './Roulette.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {GetCaseInfo} from "../../BLL/Reducers/CaseInfoReducer";
import {ShowWinCase} from "../../BLL/Reducers/RouletteReducer";


class TestJquery extends React.Component {
    componentDidMount() {
        let caseId = this.props.match.params.caseId
        this.props.GetCaseInfo(caseId)
        const setWinCase = this.props.ShowWinCase
        const gunsArray = this.props.CaseInfo.weapon
        $(document).ready(function () {
            for (let i = 0; i < 3; i++) {
                $(".list li").clone().appendTo(".list");
            }
            $('.button').click(function () {
                $('.window').css({
                    right: "0"
                })
                $('.list li').css({
                    border: '4px solid transparent'
                })

                function selfRandom(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                let x = selfRandom(50, 80);
                let WinCase = $('.list li:eq(' + x + ')')[0].children[1].childNodes[0].data
                let WinCaseImg =  $('.list li:eq(' + x + ')')[0].children[0].childNodes[0].currentSrc
                console.log(WinCase)
                console.log(WinCaseImg)
                let WinPrice = gunsArray.filter(g => g.name === WinCase)[0].price
                console.log(WinPrice)
                $('.list li:eq(' + x + ')').css({
                    border: '4px solid white'
                })
                $('.window').animate({
                        right: ((x * 130) + (x * 8 - 12) - 119)
                    }, 10000,() => {setWinCase(WinCase, WinCaseImg, WinPrice)}
                )
            });
        });
    }
    render() {
        let GunsLiArray = this.props.CaseInfo.weapon.map(g =>
            <li key={g.id}>
                <div><img src={g.image} alt=""/></div>
                <div>{g.name}</div>
            </li>)
        return <>
            {this.props.WinInfo.winCase && <WinCase WinInfo={this.props.WinInfo} />}
            <div className="wraper">
                <div className="arrowup"></div>
                <div className="arrowdown"></div>
                <div className="window">
                    <ul className="list">

                    </ul>
                    <ul className="list">
                        {GunsLiArray}
                    </ul>
                </div>
            </div>
            <p>
                <button className="button">Кнопка</button>
                <div className="win">
                    <ul>
                    </ul>
                </div>
            </p>
        </>
    }
}
const WinCase = (props) => {
    return <div className={'winCase'}>
        <h1>YOU WIIIN!!</h1>
        <div>
            {props.WinInfo.winCase}
        </div>
        <img className={'winCaseImg'} src={props.WinInfo.winCaseImg} alt={'case'}/>
    </div>
}

let mapStateToProps = (state) => ({
    CaseInfo: state.CaseInfo,
    WinInfo: state.Roulette
})

export default compose(
    connect(mapStateToProps, {GetCaseInfo,ShowWinCase}),
    withRouter,
    withAuthRedirect
)
(TestJquery)