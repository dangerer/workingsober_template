
$(function() {

	// grouping of optional grids
	if ($('#optionalGrid3294').length) {
	
		var tmplEl = $("<div class='form-check checkbox'>"
			+"                        <input class='form-check-input' id='selectAllGroupCheckbox1' type='checkbox' name='' value=''>"
			+"                        <label class='form-check-label' for='selectAllGroupCheckbox1'>"
			+"                            DigCompEdu English 1-6 with activities"
			+"                        </label>"
			+"                    </div>");
		
		$("#optionalGrid3294").closest('.form-check').before(tmplEl);
		$("#optionalGrid3294, #optionalGrid3296, #optionalGrid3297, #optionalGrid3298, #optionalGrid3303, #optionalGrid3304").closest('.form-check').hide();
		// check if all already checked
		if ($('#optionalGrid3294:checked, #optionalGrid3296:checked, #optionalGrid3297:checked, #optionalGrid3298:checked, #optionalGrid3303:checked, #optionalGrid3304:checked').length 
				== $('#optionalGrid3294, #optionalGrid3296, #optionalGrid3297, #optionalGrid3298, #optionalGrid3303, #optionalGrid3304').length) 
		{
			$('#selectAllGroupCheckbox1').prop('checked', true);
		}
	
		var resultGroup = $('#gridGroup1Wrapper');
		tmplEl.find('.card-body').append(resultGroup);
	
		$('#selectAllGroupCheckbox1').on('change', function() {
			if ($(this).prop('checked')) {
				// check all
				$("#optionalGrid3294, #optionalGrid3296, #optionalGrid3297, #optionalGrid3298, #optionalGrid3303, #optionalGrid3304").prop('checked', true);
			} else {
				// uncheck all
				$("#optionalGrid3294, #optionalGrid3296, #optionalGrid3297, #optionalGrid3298, #optionalGrid3303, #optionalGrid3304").prop('checked', false);
			};
		});
	}


})
