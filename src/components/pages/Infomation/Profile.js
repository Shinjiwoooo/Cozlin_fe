import Applicant from "../../blocks/Applicant";
// import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import { useSelector } from "react-redux";
import classes from '../../../styles/pages/layout/mypage.module.css';
import InputComponent from "../../blocks/InputComponent";
import InputBox from "../../blocks/InputBox";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Profile = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  
  const navigate = useNavigate();

  useEffect(() => {
    
    //  페이지 로딩할때 맨처음에 한번 실행
    for (let i = 0; i < Object.keys(isLogin).length; i++) {
      
      if (isLogin[Object.keys(isLogin)[i]] ==  null) {
        isLogin[Object.keys(isLogin)[i]] = "";
      }

    }

  }, []);

  console.log(isLogin);

  const currPwdHandler = (e) => {
    //
  }

  const changePwdHandler = (e) => {
    //
  }

  const changeCheckPwdHandler = (e) => {
    //
  }

  const modifyMyInfo = (e) => {
      // 1. 일단 navigate (useNavigate) 를 가져오고 잘 이동하는지 확인한다.
      // 2. 컴포넌트를 새로 만든다
      // 3. router의 주소와 해당 컴포넌트를 연결시킨다.
      // 4. 새로 만든다.
      navigate("/applicant/profile/update")

  }

  const inputComponent_carrerYn = isLogin.userJobCareerYn === "Y"  && <div> 
                                                                          <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} value={{first :isLogin.userLastCompany, second :isLogin.userLastJobGroup, third : isLogin.userDesiredJobGroupCareer, fourth : ''}} placeholder={{first :'' , second :'', third : '', fourth : ''}} use="isReadOnly" label="최종 경력" inputTitle={{first : '회사명', second : '직무', third : '재직기간', fourth :''}} />
                                                                          <div className={classes.line}></div>
                                                                      </div>



  return (
    <MypageLayout remove_height="profile" >
      <Applicant /> 
      <div className={classes.account}>
         <div className={classes.management_box}>
            <div className={classes.dark}>
               <h2 className={classes.h2_option}>프로필 관리</h2>
               <p className={classes.p_option}>작성한 프로필로 입사지원을 할 수 있습니다.</p>
            </div>
            <div>

              <div style={{width : '137px'}}>
                <Button btn={{
                  value : '수정하기',
                  onClick : modifyMyInfo
                  }} />
              </div>
            </div>
         </div>        
         <div className={classes.line}></div>
         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler, }}  value={{first :isLogin.userName , second :isLogin.userPhone, third : isLogin.userId, fourth : ''}}
         placeholder={{first :'' , second :'', third : '', fourth : ''}}
         use="isReadOnly" label="기본 정보" inputTitle={{first : '이름', second : '연락처', third : '이메일', fourth : ''}} />
         <div className={classes.line}></div>
         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} value={{first :isLogin.userDesiredJobGroup, second :isLogin.userDesiredJob, third : isLogin.userDesiredJobGroupCareer, fourth :isLogin.userJobSkill}}
         placeholder={{first :'' , second :'', third : '', fourth : ''}} use="isReadOnly" label="희망 직무" inputTitle={{first : '직군', second : '직무', third : '직무경력', fourth : '주요스킬'}} />
         <div className={classes.line}></div>
        
        {/* userJobCareerYn 이 Y일때만 보여주는 최종경력 */}
        {inputComponent_carrerYn}

         <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} value={{first :isLogin.userLastSchoolName, second :isLogin.userLastSchoolStatus, third :isLogin.userLastSchoolDept
, fourth : ''}} placeholder={{first :'' , second :'', third : '', fourth : ''}}  use="isReadOnly" label="최종 학력" inputTitle={{first : '학교명', second : '이수상태', third : '학과명', fourth : ''}} />

         <div className={classes.line}></div>
         
         <div className={classes.input_layout}>
            <div>이력서</div>
            <div> 
               <InputBox isReadOnly={true} />
            </div>
         </div>
      </div>
    </MypageLayout>
  );
}

export default Profile;