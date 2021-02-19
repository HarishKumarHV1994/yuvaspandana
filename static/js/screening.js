json_data = {"data": [{"qid": 1, "qtype": "text", "ph": "Employee ID", "ques": {"english": "Employee ID", "kannada": ""}, "section": "General Information", "next_qid": 2, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 2, "qtype": "radio", "ques": {"english": "Gender", "kannada": ""}, "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Male", "value_id": 0, "next_qid": 3}, {"aid": 2, "value": "Female", "value_id": 0, "next_qid": 3}, {"aid": 3, "value": "Third Gender", "value_id": 0, "next_qid": 3}]}, {"qid": 3, "qtype": "date", "ph": "DD/MM/YYYY", "ques": {"english": "Date of Birth ", "kannada": ""}, "section": "General Information", "next_qid": 4, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": {}}, {"qid": 4, "qtype": "radio", "ques": {"english": "Marital Status ", "kannada": ""}, "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Currently Married", "value_id": 0, "next_qid": 5}, {"aid": 2, "value": "Single", "value_id": 0, "next_qid": 6}, {"aid": 3, "value": "Separated", "value_id": 0, "next_qid": 5}, {"aid": 4, "value": "Divorced", "value_id": 0, "next_qid": 5}]}, {"qid": 5, "qtype": "num", "ph": "Enter number", "ques": {"english": "Number of living children ( enter number of children )", "kannada": ""}, "section": "General Information", "next_qid": 6, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 6, "qtype": "radio", "ques": {"english": "Educational status ", "kannada": ""}, "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not literate ", "value_id": 0, "next_qid": 7}, {"aid": 2, "value": "Up to High school", "value_id": 0, "next_qid": 7}, {"aid": 3, "value": "II PUC", "value_id": 0, "next_qid": 7}, {"aid": 4, "value": "Professional/ ITI/JOC training ", "value_id": 0, "next_qid": 7}, {"aid": 5, "value": "Degree and above", "value_id": 0, "next_qid": 7}]}, {"qid": 7, "qtype": "text", "ph": "Enter text", "ques": {"english": "Designation ", "kannada": ""}, "section": "General Information", "next_qid": 8, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 8, "qtype": "pair_num_yymm", "ph": -9, "ques": {"english": "Service ( Since how many years and months you are employed in this workplace)", "kannada": ""}, "section": "General Information", "next_qid": 9, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 9, "qtype": "radio", "ques": {"english": "Work shift <br> <i> If you are alternating between day and night every 1-15 days , enter response as <b>rotating day and night</b> </i>", "kannada": ""}, "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Predominantly Day shift ", "value_id": 0, "next_qid": 10}, {"aid": 2, "value": "Predominantly Night shift", "value_id": 0, "next_qid": 10}, {"aid": 3, "value": "Rotating Day and Night shift ", "value_id": 0, "next_qid": 10}]}, {"qid": 10, "qtype": "radio", "ques": {"english": "Have you ever used the <b><u>Tobacco  (cigarette, beedi, gutka) in the last one year</u></b>? ", "kannada": ""}, "section": "NCD risk factor screening <br>Tobacco and Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes;on a daily basis", "value_id": 1, "next_qid": 11}, {"aid": 2, "value": "Yes; but on a less than daily basis", "value_id": 2, "next_qid": 11}, {"aid": 3, "value": "No, Not at all ", "value_id": 0, "next_qid": 11}]}, {"qid": 11, "qtype": "radio", "ques": {"english": "<b><u>During the past 12 months</u></b), how frequently have you had <b><u>at least one alcoholic drink</u></b>?", "kannada": ""}, "section": "NCD risk factor screening <br>Tobacco and Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Never consumed alcohol ever ", "value_id": 0, "next_qid": 12}, {"aid": 2, "value": "Less than once a month ", "value_id": 1, "next_qid": 12}, {"aid": 3, "value": "1-3 days a month", "value_id": 2, "next_qid": 12}, {"aid": 4, "value": "1-4 days per week", "value_id": 3, "next_qid": 12}, {"aid": 5, "value": "5-6 days per week", "value_id": 4, "next_qid": 12}]}, {"qid": 12, "qtype": "radio", "ques": {"english": "Have you ever used <b><u>Tobacco (cigarette, beedi, gutka) in the last 30 days? </u></b>", "kannada": ""}, "section": "NCD risk factor screening <br>Tobacco and Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes;on a daily basis", "value_id": 1, "next_qid": 13}, {"aid": 2, "value": "Yes; but on a less than daily basis", "value_id": 2, "next_qid": 13}, {"aid": 3, "value": "No, Not at all ", "value_id": 0, "next_qid": 13}, {"aid": 4, "value": "Not Applicable", "value_id": 99, "next_qid": 13}]}, {"qid": 13, "qtype": "radio", "ques": {"english": "Have you ever had <b><u>Alcohol ( Neera, toddy, arrack, whisky, rum, wine, beer etc )  in the last 30 days? </u></b>", "kannada": ""}, "section": "NCD risk factor screening <br>Tobacco and Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes;on a daily basis", "value_id": 1, "next_qid": 14}, {"aid": 2, "value": "Yes; but on a less than daily basis", "value_id": 2, "next_qid": 14}, {"aid": 3, "value": "No, Not at all ", "value_id": 0, "next_qid": 14}, {"aid": 4, "value": "Not Applicable", "value_id": 99, "next_qid": 14}]}, {"qid": 14, "qtype": "radio", "ques": {"english": "Predominant Diet ", "kannada": ""}, "section": "NCD risk factor screening<br>Unhealthy diets", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Only Vegetarian", "value_id": 1, "next_qid": 15}, {"aid": 2, "value": "Mixed but predominantly vegetarian", "value_id": 2, "next_qid": 15}, {"aid": 3, "value": "Mixed but predominantly Non-vegetarian", "value_id": 3, "next_qid": 15}]}, {"qid": 15, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week, approximately how many times do you consume deep fried food stuffs (fried chicken, mutton, fish , fries, samosas chips,puffs, papdi etc)<br><i>Enter number of times  you consume fried foods. Example For  today, if you ate samosa in the morning, chicken fry afternoon and egg puffs in evening, then the answer is 3, Similarly, enter for the week</i>", "kannada": ""}, "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 16, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 16, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week how many times you consume food with high salt content (pickles, pappad, canned foods etc)", "kannada": ""}, "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 17, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 17, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week, how many days you consume fruits ", "kannada": ""}, "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 18, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 18, "qtype": "radio", "ques": {"english": "Apart from your work , do you indulge in regular exercise or physical sports?<br><i>Regular means following a  fixed routine or fixed time on fixed days , followed at least for three months<br>Physical activity referes to moderate-vigourous intensity activities and sports<br>Sports refer to vigorous-intensity sports, fitness or recreational (leisure) activities that cause large increases in breathing or heart rate like [running or football] for at least 10 minutes continuously</i>", "kannada": ""}, "section": "NCD risk factor screening <br>Physical Inactivity", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No, I do not regularly exercise or play sports", "value_id": 0, "next_qid": 19}, {"aid": 2, "value": "Yes, for less than 50 minutes per week", "value_id": 1, "next_qid": 19}, {"aid": 3, "value": "Yes, for 50-99 minutes per week", "value_id": 2, "next_qid": 19}, {"aid": 4, "value": "Yes, for 100-149 minutes per week", "value_id": 3, "next_qid": 19}, {"aid": 5, "value": "Yes for 150+ minutes per week", "value_id": 4, "next_qid": 19}]}, {"qid": 19, "qtype": "num", "ph": -9, "ques": {"english": "How many days in a week you indulge in physical activity (leisure related, not work related)", "kannada": ""}, "section": "NCD risk factor screening <br>Physical Inactivity", "next_qid": 20, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 20, "qtype": "radio", "ques": {"english": "Over the last 2 weeks, how often have you been bothered by <b>Little interest or pleasure in doing things </b>?", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all ", "value_id": 0, "next_qid": 21}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 21}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 21}, {"aid": 4, "value": "Nearly every day ", "value_id": 3, "next_qid": 21}]}, {"qid": 21, "qtype": "radio", "ques": {"english": "Over the last 2 weeks, how often have you been bothered by <b>Feeling down, depressed, or hopeless  </b>?", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all ", "value_id": 0, "next_qid": 22}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 22}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 22}, {"aid": 4, "value": "Nearly every day ", "value_id": 3, "next_qid": 22}]}, {"qid": 22, "qtype": "radio", "ques": {"english": "Do you perceive that you often get excessively stressed because of your work? <br><i>Stress here refers to stress experienced in your workplace . This does not refer to other stress in life like stress related to death of family member, traffic, disability, relationships, disease etc. </i>", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No , I am not excessively stressed", "value_id": 0, "next_qid": 23}, {"aid": 2, "value": "No, But I am not very sure ", "value_id": 1, "next_qid": 23}, {"aid": 3, "value": "Yes, to a minimal extent (for <50% of  my worktime)", "value_id": 2, "next_qid": 23}, {"aid": 4, "value": "Yes, to some extent (50-75% of my work time)  ", "value_id": 3, "next_qid": 23}, {"aid": 5, "value": "Yes, to great extent (>75% of my work time) ", "value_id": 4, "next_qid": 23}]}, {"qid": 23, "qtype": "radio", "ques": {"english": "Do you feel it is difficult for you to cope with work stress ?", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No, I do not have excess work stress", "value_id": 0, "next_qid": 24}, {"aid": 2, "value": "Yes, I manage cope to great extent", "value_id": 3, "next_qid": 24}, {"aid": 3, "value": "Yes, I manage to cope to some extent", "value_id": 2, "next_qid": 24}, {"aid": 4, "value": "No, I find it difficult to cope", "value_id": 1, "next_qid": 24}, {"aid": 5, "value": "No, I cannot cope at all", "value_id": 0, "next_qid": 24}]}, {"qid": 24, "qtype": "radio", "ques": {"english": "Do you feel that you are experiencing health problems due to stress? ", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes, I strongly feel so", "value_id": 1, "next_qid": 25}, {"aid": 2, "value": "Yes, to some extent ", "value_id": 2, "next_qid": 25}, {"aid": 3, "value": "Cannot say ", "value_id": 3, "next_qid": 25}, {"aid": 4, "value": "No,I don’t think so", "value_id": 4, "next_qid": 25}]}, {"qid": 25, "qtype": "num", "ph": -9, "ques": {"english": "How many hours you sleep daily on an average?", "kannada": ""}, "section": "Mental wellbeing screening", "next_qid": 26, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 24}, {"qid": 26, "qtype": "radio", "ques": {"english": "In the last 6 months, have you felt that it is not worth living anymore and these thoughts been repetitive and increasing in intensity?", "kannada": ""}, "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all", "value_id": 0, "next_qid": 27}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 27}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 27}, {"aid": 4, "value": "Nearly every day", "value_id": 3, "next_qid": 27}]}, {"qid": 27, "qtype": "num", "ph": "Enter cms", "ques": {"english": "Height ( in centi metres)", "kannada": ""}, "section": "Measurement", "next_qid": 28, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 500}, {"qid": 28, "qtype": "num", "ph": "Enter KGs", "ques": {"english": "Weight  (in kilograms)  ", "kannada": ""}, "section": "Measurement", "next_qid": 29, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 500}, {"qid": 29, "qtype": "pair_num_bp", "ph": "in mm of Hg", "ques": {"english": "Blood Pressure (in mm of Hg)", "kannada": ""}, "section": "Measurement", "next_qid": 30, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 30, "qtype": "radio", "ques": {"english": "Blood pressure measure type ", "kannada": ""}, "section": "Measurement", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Self measured using Digital BP apparatus", "value_id": 0, "next_qid": 31}, {"aid": 2, "value": "Measured by health staff ", "value_id": 0, "next_qid": 31}]}, {"qid": 31, "qtype": "num", "ph": "In mg/dl", "ques": {"english": "Random Blood Sugar ( mg/dl)", "kannada": ""}, "section": "Measurement", "next_qid": 32, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 1000}, {"qid": 32, "qtype": "num", "ph": "in minutes", "ques": {"english": "Minutes of regular exercise or physical sport per week", "kannada": ""}, "section": "Measurement", "next_qid": 0, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 10080}],"sections":[{"name":"General Information","summary":""},{"name":"NCD risk factor screening <br>Tobacco and Alcohol Use","summary":""},{"name":"NCD risk factor screening<br>Unhealthy diets","summary":""},{"name":"NCD risk factor screening <br>Physical Inactivity","summary":""},{"name":"Mental wellbeing screening","summary":""},{"name":"Measurement","summary":""}], "heading":"Screening for NCDs, NCD risk factors and psychological distress"}


var res = []

function checkValid(field_id, field_range){

	//console.log(field_id, field_range)

    var val = document.getElementById(field_id).value
    //alert('val'+val)
    //alert('field_range'+field_range)
    

    if (val < 0 || val > parseInt(field_range)){
        document.getElementById(field_id).value = ''
        alert('Please enter values <='+field_range)
    }
}

function select_radio(qid, element_id){

	var radio_element = document.getElementById('q'+qid+'_'+element_id)

	var element_count = json_data.data[parseInt(qid)-1]['ans'].length

	json_data.data[parseInt(qid)-1].selection_val = parseInt(element_id)

	for(var i=0; i<element_count; i++){
		if((i+1) != parseInt(element_id)){
			var ele = document.getElementById('q'+qid+'_'+(i+1).toString())
			ele.classList.remove("btn-rose")
		}
	}

	radio_element.classList.add("btn-rose")
    //If the answer for 4th question is 2 (Single), then the 5th question should be skipped
	if(parseInt(qid) == 4){
		
		new_qid = (parseInt(qid) + 1).toString()
        //If the selected option is 1st, 3rd or 4th , the user should be displayed the 5th question. Else, it should skip the next question
		if(parseInt(element_id) == 1 || parseInt(element_id) == 3 || parseInt(element_id) == 4){
			document.getElementById('q_'+new_qid+'_q').style.display = 'block'
      		document.getElementById('q_'+new_qid+'_ig').style.display = 'block'
		}else{
			document.getElementById('q_'+new_qid+'_q').style.display = 'none'
      		document.getElementById('q_'+new_qid+'_ig').style.display = 'none'

      		json_data.data[parseInt(new_qid)-1].selection_val = parseInt(element_id)
		}
	}
}

function calculate_score(){

	var work_stress_msg = [
		{
			"msg": "You are not experiencing any significant level of work-stress.",
			"score": "less or equal to 48"
		},
		{
			"msg": "Your work-stress level is <span style='color: #FBC02D; font-weight: 550;'>MILD</span>.",
			"score": "between 48 - 59"
		},
		{
			"msg": "Your work-stress level is <span style='color: #FF5722; font-weight: 550;'>MODERATE</span>.",
			"score": "between 60 - 73"
		},
		{
			"msg": "Your work-stress level is <span style='color: #D32F2F; font-weight: 550;'>SEVERE</span>.",
			"score": "more than 73"
		}
	]

	var symptoms_msg = [
		{
			"msg": "You do not have any symptoms suggestive of work-stress.</span>",
			"score": "less or equal to 16"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #FBC02D; font-weight: 550;'>MILD</span>.",
			"score": "between 16 - 29"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #FF5722; font-weight: 550;'>MODERATE</span>.",
			"score": "between 30 - 36"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #D32F2F; font-weight: 550;'>SEVERE</span>.",
			"score": "more than 36"
		}
	]

	work_stress_score = 0
	symptoms_score = 0

	//work_stress_ques = 14 - 45
	//symptoms_ques = 46 - 61

	for(var i=13; i<45; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			work_stress_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
		}
	}

	for(var i=45; i<61; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			symptoms_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
		}
	}

	console.log(work_stress_score, symptoms_score)

	msgs = {"work_stress": "", "symptoms": ""}

	if(work_stress_score <= 48){
		msgs.work_stress = work_stress_msg[0].msg
	}else if(work_stress_score > 48 && work_stress_score <= 59){
		msgs.work_stress = work_stress_msg[1].msg
	}else if(work_stress_score > 59 && work_stress_score <= 73){
		msgs.work_stress = work_stress_msg[2].msg
	}else if(work_stress_score > 73){
		msgs.work_stress = work_stress_msg[3].msg
	}

	if(symptoms_score <= 16){
		msgs.symptoms = symptoms_msg[0].msg
	}else if(symptoms_score > 16 && symptoms_score <= 29){
		msgs.symptoms = symptoms_msg[1].msg
	}else if(symptoms_score > 29 && symptoms_score <= 36){
		msgs.symptoms = symptoms_msg[2].msg
	}else if(symptoms_score > 36){
		msgs.symptoms = symptoms_msg[3].msg
	}

	return msgs

}

function on_submit(){
	var flag = 0

	var data_payload = []

	for(var i=0; i<json_data.data.length; i++){
		
		var ques_type = json_data.data[i].qtype

		if(json_data.data[i].mandatory == "True"){
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(val.length == 0){
					flag = 1
				}
			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(parseInt(val) < 0 || parseInt(val) == NaN){
					flag = 2
				}
			}else if(ques_type == 'date'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(val.length == 0){
					flag = 3
				}
			}else if(ques_type == 'radio'){
				
				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)

				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
					flag = 5
				}

			}else if(ques_type == 'pair_num_yymm'){
                //Capture numbe of years and months
                //q_{{y['qid']}}_yy_data
				var yy_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_yy_data').value
                var mm_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_mm_data').value

				json_data.data[i].selection_val_yy = yy_val
                json_data.data[i].selection_val_mm = mm_val
                

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val_yy': yy_val, 'selection_val_mm':mm_val})
                

				if(parseInt(yy_val) < 0 || parseInt(yy_val) == NaN){
					flag = 2
				}
                if(parseInt(mm_val) < 0 || parseInt(mm_val) == NaN){
					flag = 2
				}
			}else if(ques_type == 'pair_num_bp'){
                //Capture numbe of systolic and diabolic
                //q_{{y['qid']}}_sys_data
				var sys_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_sys_data').value
                var dia_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_dia_data').value

				json_data.data[i].selection_val_sys = sys_val
                json_data.data[i].selection_val_dia =dia_val
                

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val_sys': sys_val, 'selection_val_dia':dia_val})
                

				if(parseInt(sys_val) < 0 || parseInt(sys_val) == NaN){
					flag = 2
				}
                if(parseInt(dia_val) < 0 || parseInt(dia_val) == NaN){
					flag = 2
				}
		}else{
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}
		}

	}
    }

	if(flag == 0){
        
        //alert(json_data);

		//var scores = calculate_score()

		/*localStorage.setItem('_stress_app_user_name', data_payload[0].selection_val)
		localStorage.setItem('_stress_app_work_stress_msg', scores.work_stress)
		localStorage.setItem('_stress_app_symptoms_msg', scores.symptoms)*/
		
		document.getElementById('done_spinner').style.display = 'block'

		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	          //console.log(this.responseText);
	          window.location.href = '/ncdscreening_score'
	        }
	    };
	    xhttp.open("POST", "/add_ncdscreening_assessment", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send('data='+encodeURIComponent(JSON.stringify(data_payload)));

	    console.log(JSON.stringify(data_payload))
	    

	}else if(flag == 1){
		alert('Please answer all the text questions')
	}else if(flag == 2){
		alert('Please answer all the numeric questions')
	}else if(flag == 3){
		alert('Please answer all the date questions')
	}else if(flag == 4){
		alert('Please answer all the selection questions')
	}else if(flag == 5){
		alert('Please answer all the questions')
	}else if(flag == 6){
		alert('Please answer all the checkbox questions')
	}

}

