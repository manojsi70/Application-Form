import React, { useState } from "react";
import "./form.css";
import bg from "../image/bg.jpg";
function EnquiryForm() {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      courses: "",
      dob: "",
      gender: "",
      collegeName: "",
      number: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      index: "",
   });
   const [userData, setUserData] = useState([]);

   let getValue = (e) => {
      let oldData = { ...formData };
      let inputName = e.target.name;
      let inputValue = e.target.value;
      oldData[inputName] = inputValue;
      setFormData(oldData);
    
   };

   let FormSumbit = (e) => {
      let currentUserFormdata = {
         firstName: formData.firstName,
         lastName: formData.lastName,
         courses: formData.courses,
         dob: formData.dob,
         gender: formData.gender,
         collegeName: formData.collegeName,
         number: formData.number,
         address1: formData.address1,
         address2: formData.address2,
         city: formData.city,
         state: formData.state,
         zipCode: formData.zipCode,
         country: formData.country,
         index: formData.index,
      };

      let oldUsesrData = [...userData, currentUserFormdata]; //old Array + New Array Element
      console.log(oldUsesrData);
      setUserData(oldUsesrData);
      setFormData(
        {
            firstName: "",
            lastName: "",
            courses: "",
            dob: "",
            gender: "",
            collegeName: "",
            number: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            index: "",   
        }
      )
      e.preventDefault();
   };

   return (
      <div class="container main-container">
         <img className="bg-image" src={bg} alt="" />
         <div class="row">
            <div class="col col-md-1"></div>
            <div class="col form-div">
               <div class="card card-div">
                  <div class="card-header">
                     <h2>Course Applications</h2>
                  </div>
                  <form onSubmit={FormSumbit}>
                     <div class="card-body">
                        <div class="row mb-5">
                           <label
                              for="inputName"
                              class="col-sm-2 col-form-label"
                           >
                              Full Name <sub>*</sub>
                           </label>
                           <div class="col-sm-5">
                              <input
                                 type="name"
                                 onChange={getValue}
                                 class="form-control inputsection"
                                 id="inputName"
                                 name="firstName"
                                 value={formData.firstName}
                                 placeholder="First Name"
                              />
                           </div>

                           <div class="col-sm-5">
                              <input
                                 type="name"
                                 onChange={getValue}
                                 class="form-control inputsection"
                                 id="inputName"
                                 name="lastName"
                                 value={formData.lastName}
                                 placeholder="Last Name"
                              />
                           </div>
                        </div>
                        <div class="row mb-5">
                           <label
                              for="inputName"
                              class="col-sm-2 col-form-label"
                           >
                              Which course are you applying for?
                              <sub>*</sub>
                           </label>
                           <div class="col-sm-10">
                              <select
                                 onChange={getValue}
                                 name="courses"
                                 id=""
                                 className="Select-option inputsection"
                                 value={formData.courses}
                              >
                                 <option value="">Select</option>
                                 <option>
                                    Bachelor of Technology (B.Tech)
                                 </option>
                                 <option>Bachelor of Engineering (B.E.)</option>
                                 <option>Master of Technology (M.Tech)</option>
                                 <option>Master of Engineering (M.E.)</option>
                                 <option>
                                    Bachelor of Computer Applications (BCA)
                                 </option>
                                 <option>
                                    Master of Computer Applications (MCA)
                                 </option>

                                 <option>
                                    Bachelor of Medicine, Bachelor of Surgery
                                    (MBBS)
                                 </option>
                                 <option>
                                    Bachelor of Dental Surgery (BDS)
                                 </option>
                                 <option>
                                    Bachelor of Ayurvedic Medicine and Surgery
                                    (BAMS)
                                 </option>
                                 <option>
                                    Bachelor of Homeopathic Medicine and Surgery
                                    (BHMS)
                                 </option>
                                 <option>Bachelor of Pharmacy (B.Pharm)</option>
                                 <option>Master of Pharmacy (M.Pharm)</option>
                                 <option>
                                    Bachelor of Science in Nursing (B.Sc
                                    Nursing)
                                 </option>
                                 <option>
                                    Master of Science in Nursing (M.Sc Nursing)
                                 </option>
                                 <option>Doctor of Medicine (MD)</option>
                                 <option>Master of Surgery (MS)</option>

                                 <option>Bachelor of Science (B.Sc)</option>
                                 <option>Master of Science (M.Sc)</option>

                                 <option>Bachelor of Commerce (B.Com)</option>
                                 <option>Master of Commerce (M.Com)</option>
                                 <option>
                                    Bachelor of Business Administration (BBA)
                                 </option>
                                 <option>
                                    Master of Business Administration (MBA)
                                 </option>

                                 <option>Bachelor of Arts (B.A.)</option>
                                 <option>Master of Arts (M.A.)</option>

                                 <option>Bachelor of Laws (LLB)</option>
                                 <option>Master of Laws (LLM)</option>

                                 <option>Bachelor of Design (B.Des)</option>
                                 <option>Bachelor of Fine Arts (BFA)</option>
                                 <option>Master of Design (M.Des)</option>
                                 <option>Master of Fine Arts (MFA)</option>

                                 <option>
                                    Bachelor of Science in Agriculture (B.Sc
                                    Agriculture)
                                 </option>
                                 <option>
                                    Master of Science in Agriculture (M.Sc
                                    Agriculture)
                                 </option>
                                 <option>
                                    Bachelor of Veterinary Science and Animal
                                    Husbandry (B.V.Sc & AH)
                                 </option>
                                 <option>
                                    Master of Veterinary Science (M.V.Sc)
                                 </option>

                                 <option>Bachelor of Education (B.Ed)</option>
                                 <option>Master of Education (M.Ed)</option>

                                 <option>
                                    Bachelor of Hotel Management (BHM)
                                 </option>
                                 <option>
                                    Bachelor of Science in Hospitality and Hotel
                                    Administration (B.Sc HHA)
                                 </option>
                                 <option>
                                    Master of Hotel Management (MHM)
                                 </option>
                              </select>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              >
                                 Date of birth <sub>*</sub>
                              </label>
                              <div class="col-sm-10">
                                 <input
                                    type="date"
                                    onChange={getValue}
                                    class="form-control inputsection"
                                    id="inputdate"
                                    name="dob"
                                    value={formData.dob}
                                    placeholder="Date of birth"
                                 />
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              >
                                 Gender <sub>*</sub>
                              </label>
                              <div class="col-sm-5">
                                 <select
                                    className="genders inputsection"
                                    onChange={getValue}
                                    name="gender"
                                    value={formData.gender}
                                    id=""
                                 >
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                 </select>
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              >
                                 College Names <sub>*</sub>
                              </label>
                              <div class="col-sm-10">
                                 <select
                                    className="Colleges inputsection"
                                    onChange={getValue}
                                    name="collegeName"
                                    value={formData.collegeName}
                                    id=""
                                 >
                                    <option value="">Select</option>
                                    <option>
                                       Banaras Hindu University (BHU), Varanasi
                                    </option>
                                    <option>
                                       Aligarh Muslim University (AMU), Aligarh
                                    </option>
                                    <option>
                                       University of Lucknow, Lucknow
                                    </option>
                                    <option>
                                       Dr. A.P.J. Abdul Kalam Technical
                                       University (AKTU), Lucknow
                                    </option>
                                    <option>
                                       Chaudhary Charan Singh University (CCSU),
                                       Meerut
                                    </option>
                                    <option>
                                       Babasaheb Bhimrao Ambedkar University
                                       (BBAU), Lucknow
                                    </option>
                                    <option>
                                       Bundelkhand University, Jhansi
                                    </option>
                                    <option>
                                       Chhatrapati Shahu Ji Maharaj University
                                       (CSJMU), Kanpur
                                    </option>
                                    <option>
                                       Dr. Ram Manohar Lohia Avadh University,
                                       Ayodhya
                                    </option>
                                    <option>
                                       Mahatma Gandhi Kashi Vidyapith, Varanasi
                                    </option>
                                    <option>
                                       Indian Institute of Technology (IIT),
                                       Kanpur
                                    </option>
                                    <option>
                                       Motilal Nehru National Institute of
                                       Technology (MNNIT), Allahabad
                                    </option>
                                    <option>
                                       Harcourt Butler Technical University
                                       (HBTU), Kanpur
                                    </option>
                                    <option>
                                       Indian Institute of Information
                                       Technology (IIIT), Allahabad
                                    </option>
                                    <option>
                                       Ajay Kumar Garg Engineering College,
                                       Ghaziabad
                                    </option>
                                    <option>
                                       Galgotias College of Engineering and
                                       Technology, Greater Noida
                                    </option>
                                    <option>
                                       KIET Group of Institutions, Ghaziabad
                                    </option>
                                    <option>
                                       JSS Academy of Technical Education, Noida
                                    </option>
                                    <option>
                                       King George's Medical University (KGMU),
                                       Lucknow
                                    </option>
                                    <option>
                                       Sanjay Gandhi Postgraduate Institute of
                                       Medical Sciences (SGPGIMS), Lucknow
                                    </option>
                                    <option>
                                       Jawaharlal Nehru Medical College, Aligarh
                                    </option>
                                    <option>
                                       Institute of Medical Sciences, BHU,
                                       Varanasi
                                    </option>
                                    <option>
                                       Lala Lajpat Rai Memorial Medical College,
                                       Meerut
                                    </option>
                                    <option>
                                       Moti Lal Nehru Medical College, Allahabad
                                    </option>
                                    <option>
                                       Indian Institute of Management (IIM),
                                       Lucknow
                                    </option>
                                    <option>
                                       Institute of Management Studies, BHU,
                                       Varanasi
                                    </option>
                                    <option>
                                       Jaipuria Institute of Management, Lucknow
                                    </option>
                                    <option>
                                       Amity Business School, Noida
                                    </option>
                                    <option>
                                       Dr. Ram Manohar Lohiya National Law
                                       University (RMLNLU), Lucknow
                                    </option>
                                    <option>
                                       Faculty of Law, BHU, Varanasi
                                    </option>
                                    <option>
                                       Aligarh Muslim University, Faculty of
                                       Law, Aligarh
                                    </option>
                                    <option>
                                       Isabella Thoburn College, Lucknow
                                    </option>
                                    <option>
                                       Christ Church College, Kanpur
                                    </option>
                                    <option>Shia PG College, Lucknow</option>
                                 </select>
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              >
                                 Contact number <sub>*</sub>
                              </label>
                              <div class="col-sm-10">
                                 <input
                                    type="phone"
                                    class="form-control inputsection"
                                    id="inputnumber"
                                    onChange={getValue}
                                    name="number"
                                    value={formData.number}
                                    placeholder="Contact number"
                                 />
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              >
                                 Address <sub>*</sub>
                              </label>
                              <div class="col-sm-10">
                                 <input
                                    type="text"
                                    class="form-control inputsection"
                                    id="inputaddress"
                                    onChange={getValue}
                                    name="address1"
                                    value={formData.address1}
                                    placeholder="Street Address"
                                 />
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              ></label>
                              <div class="col-sm-10">
                                 <input
                                    type="text"
                                    class="form-control inputsection"
                                    id="inputaddress"
                                    onChange={getValue}
                                    name="address2"
                                    value={formData.address2}
                                    placeholder="Address line 2"
                                 />
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              ></label>
                              <div class="col-sm-5">
                                 <input
                                    type="text"
                                    class="form-control inputsection"
                                    id="inputcity"
                                    onChange={getValue}
                                    name="city"
                                    value={formData.city}
                                    placeholder="City"
                                 />
                              </div>
                              <div class="col-sm-5">
                                 <select
                                    name="state"
                                    value={formData.state}
                                    id=""
                                    onChange={getValue}
                                    className="states inputsection"
                                 >
                                    <option>State</option>
                                    <option>Andhra Pradesh (Amaravati)</option>
                                    <option>
                                       Arunachal Pradesh (Itanagar)
                                    </option>
                                    <option>Assam (Dispur)</option>
                                    <option>Bihar (Patna)</option>
                                    <option>Chhattisgarh (Raipur)</option>
                                    <option>Goa (Panaji)</option>
                                    <option>Gujarat (Gandhinagar)</option>
                                    <option>Haryana (Chandigarh)</option>
                                    <option>Himachal Pradesh (Shimla)</option>
                                    <option>Jharkhand (Ranchi)</option>
                                    <option>Karnataka (Bangalore)</option>
                                    <option>Kerala (Thiruvananthapuram)</option>
                                    <option>Madhya Pradesh (Bhopal)</option>
                                    <option>Maharashtra (Mumbai)</option>
                                    <option>Manipur (Imphal)</option>
                                    <option>Meghalaya (Shillong)</option>
                                    <option>Mizoram (Aizawl)</option>
                                    <option>Nagaland (Kohima)</option>
                                    <option>Odisha (Bhubaneshwar)</option>
                                    <option>Punjab (Chandigarh)</option>
                                    <option>Rajasthan (Jaipur)</option>
                                    <option>Sikkim (Gangtok)</option>
                                    <option>Tamil Nadu (Chennai)</option>
                                    <option>Telangana (Hyderabad)</option>
                                    <option>Tripura (Agartala)</option>
                                    <option>Uttarakhand (Dehradun)</option>
                                    <option>Uttar Pradesh (Lucknow)</option>
                                    <option>West Bengal (Kolkata)</option>
                                 </select>
                              </div>
                           </div>
                           <div class="row mb-5">
                              <label
                                 for="inputName"
                                 class="col-sm-2 col-form-label"
                              ></label>
                              <div class="col-sm-5">
                                 <input
                                    type="zipcode"
                                    class="form-control inputsection"
                                    id="inputzipcode"
                                    onChange={getValue}
                                    name="zipCode"
                                    value={formData.zipCode}
                                    placeholder="Zip Code"
                                 />
                              </div>
                              <div class="col-sm-5">
                                 <select
                                    onChange={getValue}
                                    name="country"
                                    value={formData.country}
                                    id=""
                                    className="countrys inputsection"
                                 >
                                    <option>Country</option>
                                    <option>India</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                    ... and so on...
                                 </select>
                              </div>
                           </div>

                           <div class="row mb-3 btn-div">
                              <button type="sumbit" className="btn-sumbit">
                                 Add
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>

            <div class="col col-md-1"></div>
         </div>
         <div className="table-div">
            <table class="table ">
               <thead className="table-thead">
                  <tr>
                     <th scope="col">Sr. No.</th>
                     <th scope="col">First Name</th>
                     <th scope="col">Last Name</th>
                     <th scope="col">Course Name</th>
                     <th scope="col">Date of birth</th>
                     <th scope="col">Gender</th>
                     <th scope="col">College Name</th>
                     <th scope="col">Contact Number</th>
                     <th scope="col">Street Address</th>
                     <th scope="col">Address Line 2</th>
                     <th scope="col">City</th>
                     <th scope="col">State</th>
                     <th scope="col">Zip Code</th>
                     <th scope="col">Country</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody className="table-body">
                  {userData.length >= 1 ? (  
                    userData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                               <td>{data.firstName}</td>
                               <td>{data.lastName}</td>
                               <td>{data.courses}</td>
                               <td>{data.dob}</td>
                               <td>{data.gender}</td>
                               <td>{data.collegeName}</td>
                               <td>{data.number}</td>
                               <td>{data.address1}</td>
                               <td>{data.address2}</td>
                               <td>{data.city}</td>
                               <td>{data.state}</td>
                               <td>{data.zipCode}</td>
                               <td>{data.country}</td>
                               <td className="btn-td">
                                  <button type="button" className="btn btn-primary">
                                     Edit
                                  </button>
                                  <button type="button" className="btn btn-danger">
                                     Delete
                                  </button>
                               </td>
                            </tr>
 
                        )
                    })
                  ) : (
                     <tr>
                        <td colSpan="15">No Data Available</td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default EnquiryForm;
