import { Steps, Button, message } from 'antd';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';

const { Step } = Steps;

export default class TestStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      formData1: {},
      formData2: {},
    };
  }

  getStep = () => {
    return [
      {
        title: 'First',
        content: <FormStep1 onRef={ref => (this.form1 = ref)} formData={this.state.formData1} />,
      },
      {
        title: 'Second',
        content: <FormStep2 onRef={ref => (this.form2 = ref)} formData={this.state.formData2} />,
      },
      {
        title: 'Last',
        content: <div>step3</div>,
      },
    ];
  };

  next() {
    const current = this.state.current + 1;
    if (current === 1) {
      this.form1.props.form.validateFields((err, values) => {
        if (err) return;
        this.setState({ formData1: values, current });
        console.log('this.form1', err, values);
      });
    } else if (current === 2) {
      this.form2.props.form.validateFields((err, values) => {
        if (err) return;
        console.log('this.form2', err, values);
        this.setState({ formData2: values, current });
      });
    }
  }

  prev() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const steps = this.getStep();

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
