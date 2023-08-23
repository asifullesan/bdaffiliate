import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import blog1 from "../assets/img/blog/blog-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getUserCart } from "../features/user/userSlice";
import { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

let sippingSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  country: yup.string().required("Country is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  zipCode: yup.string().required("Zip code is Required"),
});

const CheckOut = () => {
  const [totalAmount, setTalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  console.log(shippingInfo);
  const [itemId, setItemID] = useState({});
  console.log(itemId);

  const dispatch = useDispatch();
  const useCartState = useSelector((state) => state?.auth?.cartProducts);

  const email = useSelector((state) => state?.auth?.user?.email);
  console.log(email);

  console.log(useCartState);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let index = 0; index < useCartState?.length; index++) {
      const itemsId = useCartState[index].itemId;
      setItemID(itemsId);
      // console.log(itemsId);
    }
  }, [useCartState]);

  useEffect(() => {
    formik.values.totalPrice = totalAmount;
    formik.values.itemId = itemId;
    formik.values.email = email;
  }, [totalAmount, itemId, email]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      itemId: "",
      totalPrice: "",
    },
    validationSchema: sippingSchema,
    onSubmit: (values) => {
      dispatch(createOrder(values));
      // alert(JSON.stringify(values))
      // setShippingInfo(values)
      formik.resetForm();
    },
  });

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < useCartState?.length; index++) {
      sum = sum + Number(useCartState[index].price);
      setTalAmount(sum);
    }
  }, [useCartState]);

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-area pt-230 pb-235 ser-bread">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Checkout</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Checkout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container checkout-wrapper py-5 home-wrapper-2">
        
              <div className="checkout-left-data">
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">{email}</p>
                <h4 className="mb-3"></h4>

                <div className="appointment-wrapper contact-form-page mt-4">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="appointment-form"
                  >
                    <div>
                      <div className="row">

                      
                      <div className="col-lg-6 col-sm-12">
                        <div className="row">
                          <div className="col-lg-6 mb-30">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={formik.values.firstName}
                              onChange={formik.handleChange("firstName")}
                              onBlur={formik.handleBlur("firstName")}
                            />
                            <div className="error">
                              {formik.touched.firstName &&
                                formik.errors.firstName}
                            </div>
                          </div>
                          <div className="col-lg-6 mb-30">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={formik.values.lastName}
                              onChange={formik.handleChange("lastName")}
                              onBlur={formik.handleBlur("lastName")}
                            />
                            <div className="error">
                              {formik.touched.lastName &&
                                formik.errors.lastName}
                            </div>
                          </div>
                        </div>

                        <div className="w-100 mb-30">
                          <select
                            name="country"
                            className=" form-select "
                            id=""
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            onBlur={formik.handleBlur("country")}
                          >
                            <option value="" selected disabled>
                              Select Country
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">
                              Congo, The Democratic Republic of The
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="Holy See (Vatican City State)">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">
                              Iran, Islamic Republic of
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea, Republic of">
                              Korea, Republic of
                            </option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova, Republic of">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">
                              Russian Federation
                            </option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and The Grenadines">
                              Saint Vincent and The Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">
                              Svalbard and Jan Mayen
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">
                              Syrian Arab Republic
                            </option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">
                              Virgin Islands, British
                            </option>
                            <option value="Virgin Islands, U.S.">
                              Virgin Islands, U.S.
                            </option>
                            <option value="Wallis and Futuna">
                              Wallis and Futuna
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                          <div className="error">
                            {formik.touched.country && formik.errors.country}
                          </div>
                        </div>

                        <div className="w-100 mb-30">
                          <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange("address")}
                            onBlur={formik.handleBlur("address")}
                          />
                          <div className="error">
                            {formik.touched.address && formik.errors.address}
                          </div>
                        </div>

                        <div className="w-100 mb-30">
                          <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone"
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                            onBlur={formik.handleBlur("mobile")}
                          />
                          <div className="error">
                            {formik.touched.mobile && formik.errors.mobile}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4  mb-30">
                            <input
                              type="text"
                              placeholder="City"
                              name="city"
                              value={formik.values.city}
                              onChange={formik.handleChange("city")}
                              onBlur={formik.handleBlur("city")}
                            />
                            <div className="error">
                              {formik.touched.city && formik.errors.city}
                            </div>
                          </div>
                          <div className="col-lg-4  mb-30">
                            <select
                              name="state"
                              className=" form-select"
                              id=""
                              value={formik.values.state}
                              onChange={formik.handleChange("state")}
                              onBlur={formik.handleBlur("state")}
                            >
                              <option value="" selected disabled>
                                Select State
                              </option>
                              <option value="Chittagong ">Chittagong </option>
                              <option value="Mymensingh ">Mymensingh </option>
                              <option value="Dhaka">Dhaka</option>
                              <option value="Rajshahi">Rajshahi</option>
                              <option value="Rangpur">Rangpur</option>
                              <option value="Khulna">Khulna</option>
                              <option value="Barishal">Barishal</option>
                              <option value="Sylhet">Sylhet</option>
                            </select>
                            <div className="error">
                              {formik.touched.state && formik.errors.state}
                            </div>
                          </div>
                          <div className="col-lg-4 mb-30">
                            <input
                              type="text"
                              placeholder="Zipcode"
                              name="zipCode"
                              value={formik.values.zipCode}
                              onChange={formik.handleChange("zipCode")}
                              onBlur={formik.handleBlur("zipCode")}
                            />
                            <div className="error">
                              {formik.touched.zipCode && formik.errors.zipCode}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 col-12 offset-lg-1">
                        {useCartState &&
                          useCartState?.map((item, index) => {
                            return (
                              <div key={index} className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-align-items-center">
                                  <div className="w-100 d-flex  gap-10">
                                    <div className="w-50 position-relative">
                                      <img
                                        className="img-fluid"
                                        src={item?.images}
                                        alt=""
                                      />
                                    </div>
                                    <div>
                                      <h5 className="total-price item-nname">
                                        {item?.title}
                                      </h5>
                                      <h6 className="total-price item-nname mt-3">
                                        $ {item?.price}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1"></div>
                                </div>
                              </div>
                            );
                          })}

                        <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                          <h4 className="total">Total</h4>
                          <h5 className="total-price">
                            $ {totalAmount ? totalAmount : "0"}
                          </h5>
                        </div>
                      </div>
                      </div>

                      <div className="w-100 mt-5">
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="/cart" className="text-dark"></Link>
                          <button className="btn" type="submit">
                            <span className="btn-text">
                              Payment{" "}
                              <i className="far fa-long-arrow-right"></i>
                            </span>{" "}
                            <span className="btn-border"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        
      </main>

      <Footer />
    </>
  );
};

export default CheckOut;
