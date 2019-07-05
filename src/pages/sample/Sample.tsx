import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {Store} from '../../store';
import {sampleActions} from '../../modules/sample';

interface Props {
  number: number;
  updateNum: () => void;
}

class Sample extends Component<Props> {
  render() {
    return (
      <div onClick={()=>this.props.updateNum()}>{this.props.number}</div>
    );
  }
}

const mapStateToProps = (state: Store) => {
  return {
    number: state.sample.number,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNum: () => {
      dispatch(sampleActions.updateNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
