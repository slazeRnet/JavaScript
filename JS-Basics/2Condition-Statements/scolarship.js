function scolarshipApplicable(input){
    let income = Number(input.shift());
    let avarageScore = Number(input.shift());
    let minimalSalary = Number(input.shift());

    let socialScolarship = 0;
    let exellentGradeScolarship = 0;

    if(income < minimalSalary && avarageScore > 4.50)
    {
        socialScolarship = (minimalSalary / 100 ) * 35;
    }
    if(avarageScore >= 5.50){
        exellentGradeScolarship = avarageScore * 25;
    }
    if(socialScolarship == 0 && exellentGradeScolarship == 0){
        console.log(`You cannot get a scholarship!`);
    }
    else if(socialScolarship >  exellentGradeScolarship){
        console.log(`You get a Social scholarship ${socialScolarship.toFixed()} BGN`);
    }
    else if(exellentGradeScolarship >=  socialScolarship){
        console.log(`You get a scholarship for excellent results ${exellentGradeScolarship.toFixed()} BGN`);
    }
}
