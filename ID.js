//JavaScript object for Responsive Navigation Bar

  
// JavaScript object to store courses based on the selected college
const coursesByCollege = {
    CCIS: [
        { value: 'BSCS', text: 'Bachelor of Science in Computer Science' },
        { value: 'BSIT', text: 'Bachelor of Science in Information Technology' }
    ],
    COED: [
        { value: 'PhDEM', text: 'Doctor of Philsophy in Education Management' },
        { value: 'MAEM', text: 'Master of Arts in Education Management' },
        { value: 'MBE', text: 'Master in Business Education'},
        { value: 'MLIS', text: 'Master in Library and Information Science '},
        { value: 'MAELT', text: 'Master of Arts in English Language Teaching'},
        { value: 'MAEd-ME', text: 'Master of Arts in Education major in Mathematics Education'},
        { value: 'MAPES', text: 'Master of Arts in Physical Education and Sports'},
        { value: 'MAED-TCA', text: 'Master of Arts in Education major in Teaching in the Challenged Areas '},
        { value: 'PBDE', text: 'Post-Baccalaureate Diploma in Education'},
        { value: 'BTLEd', text: 'Bachelor of Technology and Livelihood Education'},
        { value: 'BLIS', text: 'Bachelor of Library and Information Science'},
        { value: 'BSEd', text: 'Bachelor of Secondary Education major in English'},
        { value: 'BSEd', text: 'Bachelor of Secondary Education major in Mathematics'},
        { value: 'BSEd', text: 'Bachelor of Secondary Education major in Science'},
        { value: 'BSEd', text: 'Bachelor of Secondary Education major in Filipino'},
        { value: 'BSEd', text: 'Bachelor of Secondary Education major in Social Studies'},
        { value: 'BEEd', text: 'Bachelor of Elementary Education'},
        { value: 'BECEd', text: 'Bachelor of Early Childhood Education'}

    ],
    COL: [
        { value: 'JD', text: 'Juris Doctor' }
    ],
    CS: [
        { value: 'BSBIO', text: 'Bachelor of Science in Biology' },
        { value: 'BSCHEM', text: 'Bachelor of Science in Chemistry' },
        { value: 'BSFT', text: 'Bachelor of Science Food Technology' },
        { value: 'BSAPMATH', text: 'Bachelor of Science in Applied Mathematics' },
        { value: 'BSMATH', text: 'Bachelor of Science in Mathematics' },
        { value: 'BSND', text: 'Bachelor of Science in Nutrition and Dietetics' },
        { value: 'BSPHY', text: 'Bachelor of Science in Physics' },
        { value: 'BSSTAT', text: 'Bachelor of Science in Statistics' }
    ],
    CAL: [
        { value: 'ABELS', text: 'Bachelor of Arts in English Language Studies' },
        { value: 'ABPHILO', text: 'Bachelor of Arts in Philosophy' },
        { value: 'ABF', text: 'Bachelor of Arts in Filipinology'},
        { value: 'ABLCS', text: 'Bachelor of Arts in Literary and Cultural Studies'},
        { value: 'BPEA', text: 'Bachelor of Performing Arts major in Theater Arts'}
    ],
    CAF: [
        { value: 'BSA', text: 'Bachelor of Science in Accountancy'},
        { value: 'BSBAFM', text: 'Bachelor of Science in Business Administration Major in Financial Management' },
        { value: 'BSMA', text: 'Bachelor of Science in Management Accounting'}
    ],
    CADBE: [
        { value: 'BS-ARCH', text: 'Bachelor of Science in Architecture'},
        { value: 'BSID', text: 'Bachelor of Science in Interior Design'},
        { value: 'BSEP', text: 'Bachelor of Science in Environmental Planning'}
    ],
    CTHTM: [
        { value: 'BSHM', text: 'Bachelor of Science in Hospitality Management'},
        { value: 'BSTM', text: 'Bachelor of Science in Tourism Management '},
        { value: 'BSTRM', text: 'Bachelor of Science in Transportation Management'}
    ],
    CBA: [
        { value: 'DBA', text: 'Doctor in Business Administration'},
        { value: 'MBA', text: 'Master in Business Administration'},
        { value: 'BSBAHRM', text: 'Bachelor of Science in Business Administration major in Human Resource Management'},
        { value: 'BSBA-MM', text: 'Bachelor of Science in Business Administration major in Marketing Management'},
        { value: 'BSENTREP', text: 'Bachelor of Science in Entrepreneurship'},
        { value: 'BSOA', text: 'Bachelor of Science in Office Administration'}
    ],
    COC: [
        { value: 'BADPR', text: 'Bachelor in Advertising and Public Relations'},
        { value: 'BA Broadcasting)', text: 'Bachelor of Arts in Broadcasting'},
        { value: 'BACR', text: 'Bachelor of Arts in Communication Research '},
        { value: 'BAJ', text: 'Bachelor of Arts in Journalism'}
    ],
    COE: [
        { value: 'BSCE', text: 'Bachelor of Science in Civil Engineering'},
        { value: 'BSCpE', text: 'Bachelor of Science in Computer Engineering'},
        { value: 'BSEE', text: 'Bachelor of Science in Electrical Engineering'},
        { value: 'BSECE', text: 'Bachelor of Science in Electronics Engineering'},
        { value: 'BSIE', text: 'Bachelor of Science in Industrial Engineering'},
        { value: 'BSME', text: 'Bachelor of Science in Mechanical Engineering'},
        { value: 'BSRE', text: 'Bachelor of Science in Railway Engineering'}
    ],
    CHK: [
        { value: 'BPE', text: 'Bachelor of Physical Education'},
        { value: 'BSESS', text: 'Bachelor of Science in Exercises and Sports'}
    ],
    CPSPA: [
        { value: 'DPA', text: 'Doctor in Public Administration '},
        { value: 'MPA', text: 'Master in Public Administration'},
        { value: 'BAPS', text: 'Bachelor of Arts in Political Science '},
        { value: 'BAPE', text: 'Bachelor of Arts in Political Economy'},
        { value: 'BAIS', text: 'Bachelor of Arts in International Studies'},
        { value: 'BPA', text: 'Bachelor of Public Administration'}
    ],
    CSSD: [
        { value: 'BAH', text: 'Bachelor of Arts in History '},
        { value: 'BAS', text: 'Bachelor of Arts in Sociology'},
        { value: 'BSC', text: 'Bachelor of Science in CooperativesBachelor of Science in Cooperatives'},
        { value: 'BSE', text: 'Bachelor of Science in Economics'},
        { value: 'BSPSY', text: 'Bachelor of Science in Psychology'}
    ],
    IT: [
        { value: 'DCET', text: 'Diploma in Computer Engineering Technology'},
        { value: 'DEET', text: 'Diploma in Electrical Engineering Technology'},
        { value: 'DECET', text: 'Diploma in Electronics Engineering Technology'},
        { value: 'DICT  ', text: 'Diploma in Information Communication Technology'},
        { value: 'DMET', text: 'Diploma in Mechanical Engineering Technology'},
        { value: 'DOMT', text: 'Diploma in Office Management'}

    ],
    SHS: [
        { value: 'GAS', text: 'General Academic Strand'},
        { value: 'STEM', text: 'Science, Technology, Engineering and Mathematics'},
        { value: 'ABM', text: 'Accountancy, Business and Management'},
        { value: 'HumSS', text: 'Humanities and Social Sciences'},
        { value: 'TVL', text: 'Technical, Vocational and Livelihood Track'},
        { value: 'ICT', text: ' Information and Communications Technology'}

    ]
};

function updateCourseOptions() {
    const collegeSelect = document.getElementById('College');
    const courseSelect = document.getElementById('Course');
    const selectedCollege = collegeSelect.value;

    courseSelect.innerHTML = '';

    if (selectedCollege in coursesByCollege) {
        const courses = coursesByCollege[selectedCollege];
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.value;
            option.text = course.text;
            courseSelect.add(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const collegeSelect = document.getElementById('College');
    collegeSelect.addEventListener('change', updateCourseOptions);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbzL0edoXpUFUPYcHFgcSV1DZK_UZKPXAY_Kzl8P6dW2JOocesjENyO9tw12S4wVwsWKJw/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Submitted Successfully');
            } else {
                alert('Error');
            }
            window.location.reload();
        })
        .catch(error => {
            alert('Error: ' + error.message);
            window.location.reload();
        });
    }
});
