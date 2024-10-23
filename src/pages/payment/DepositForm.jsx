import React, { useState } from 'react';
import './DepositForm.css';

const DepositForm = () => {
  const [formData, setFormData] = useState({
    agentId: '',
    depositType: '',
    selectChain: '',
    depositedAmount: '',
    transactionId: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const createSheetData = async (data) => {
    try {
      const response = await fetch('https://sheetdb.io/api/v1/dhuvkm64l71xl', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [data],
        }),
      });
      const result = await response.json();
      if (result.created === 1) {
        setSuccess(true);
        setFormData({
          agentId: '',
          depositType: '',
          selectChain: '',
          depositedAmount: '',
          transactionId: '',
        });
      }
    } catch (error) {
      alert('An error occurred while submitting the form: ' + error.message);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.agentId) formErrors.agentId = 'Agent User ID is required';
    if (!formData.depositType) formErrors.depositType = 'Deposit Type is required';
    if (!formData.selectChain) formErrors.selectChain = 'Select Chain is required';
    if (!formData.depositedAmount) formErrors.depositedAmount = 'Deposited Amount is required';
    if (!formData.transactionId) formErrors.transactionId = 'Transaction ID/User ID is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createSheetData(formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2  style={{color:'black',fontWeight:'200',fontFamily:'poppins'}}>Deposit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="agentId">Agent User ID</label>
          <input
            type="text"
            id="agentId"
            name="agentId"
            value={formData.agentId}
            onChange={handleInputChange}
            placeholder="Client"
          />
          {errors.agentId && <small className="error">{errors.agentId}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="depositType">Type of Deposit</label>
          <select
            id="depositType"
            name="depositType"
            value={formData.depositType}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="1st payments">Pre Payment</option>
            <option value="Regular deposit">Regular Deposit</option>
          </select>
          {errors.depositType && <small className="error">{errors.depositType}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="selectChain">Select Chain</label>
          <select
            id="selectChain"
            name="selectChain"
            value={formData.selectChain}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="USDT (TRC 20)">USDT (TRC 20)</option>
            <option value="USDT (BEP 20)">USDT (BEP 20)</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          {errors.selectChain && <small className="error">{errors.selectChain}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="depositedAmount">Deposited Amount</label>
          <input
            type="number"
            id="depositedAmount"
            name="depositedAmount"
            value={formData.depositedAmount}
            onChange={handleInputChange}
            placeholder="Amount"
          />
          {errors.depositedAmount && <small className="error">{errors.depositedAmount}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="transactionId">Transaction ID/User ID</label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
            placeholder="ID"
          />
          {errors.transactionId && <small className="error">{errors.transactionId}</small>}
        </div>

        <button style={{width:'6em'}} type="submit">Submit</button>
      </form>

      {success && <p className="success-message">Request is sent. Please wait patiently.</p>}
    </div>
  );
};

export default DepositForm;
