import React, { Component } from "react";
import XLSX from "xlsx";
import { make_cols } from "./makeColumns";
import { SheetJSFT } from "./types";
import BulkDataInsert from "./submitHandler";

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: [],
      clicked: false,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleFile() {
    this.state.clicked = true;
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        console.log(this.state.data);
      });
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }

  data() {
    return this.state.data;
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "black", width: "100%" }}>Upload Data Peserta</h1>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <input
            type="file"
            className="form-control"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
            style={{ width: "100%", color: "black" }}
          />
          <br />
          {this.state.clicked ? null : (
            <input
              type="submit"
              value="Process Account"
              onClick={this.handleFile}
              style={{ width: "28%" }}
            />
          )}
        </div>
        {this.state.data.length > 0 ? (
          <BulkDataInsert
            data={this.state.data}
            contributor={this.props.contributor}
            submision={this.props.submision}
          />
        ) : null}
      </div>
    );
  }
}

export default ExcelReader;
