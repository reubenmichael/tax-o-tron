import { Fragment } from 'react'
import StructureTwoColumns from '../../components/structure/twocolumns.structure'
import Title from './title'
import CalcInputEditable from './calc-input-editable'

const CalculatorView = (props) => {
    return (
        <Fragment>
            <StructureTwoColumns bucket1={[<Title />]} bucket2={[<CalcInputEditable country={props.country} taxYear={props.taxYear} taxableIncome={props.taxableIncome} handleSubmit={props.handleSubmit} />]} />
            <StructureTwoColumns bucket1={[]} bucket2={[]} />
        </Fragment>
    )
}

export default CalculatorView
