import React from 'react';
import { type TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

const CAUSES_TREE: TreeViewBaseItem[] = [
    {
        id: "All_Causes",
        label: "All Causes",
        children: [
            {
                id: "I.Communicable,_maternal,_perinatal_and_nutritional_conditions",
                label: "I.Communicable, maternal, perinatal and nutritional conditions",
                children: [
                    {
                        id: "A.Infectious_and_parasitic_diseases",
                        label: "A.Infectious and parasitic diseases",
                        children: [
                            { id: "1.Tuberculosis", label: "1.Tuberculosis", children: [] },
                            {
                                id: "2.STDs_excluding_HIV",
                                label: "2.STDs excluding HIV",
                                children: [
                                    { id: "a.Syphilis", label: "a.Syphilis" },
                                    { id: "b.Chlamydia", label: "b.Chlamydia" },
                                    { id: "c.Gonorrhoea", label: "c.Gonorrhoea" },
                                    { id: "d.Trichomoniasis", label: "d.Trichomoniasis" },
                                    { id: "e.Gential_Herpes", label: "e.Gential Herpes" },
                                    { id: "f.Other_STDs", label: "f.Other STDs" },
                                ],
                            },
                            { id: "3.HIV_AIDS", label: "3.HIV/AIDS", children: [] },
                            {
                                id: "4.Diarrhoeal_diseases",
                                label: "4.Diarrhoeal diseases",
                                children: [],
                            },
                            {
                                id: "5.Childhood-cluster_diseases",
                                label: "5.Childhood-cluster diseases",
                                children: [
                                    { id: "a.Whooping_cough", label: "a.Whooping cough" },
                                    { id: "b.Diphtheria", label: "b.Diphtheria" },
                                    { id: "c.Measles", label: "c.Measles" },
                                    { id: "d.Tetanus", label: "d.Tetanus" },
                                ],
                            },
                            { id: "6.Meningitis", label: "6.Meningitis", children: [] },
                            { id: "7.Encephalitis", label: "7.Encephalitis", children: [] },
                            {
                                id: "8.Hepatitis",
                                label: "8.Hepatitis",
                                children: [
                                    { id: "a.Acute_hepatitis_A", label: "a.Acute hepatitis A" },
                                    { id: "b.Acute_hepatitis_B", label: "b.Acute hepatitis B" },
                                    { id: "c.Acute_hepatitis_C", label: "c.Acute hepatitis C" },
                                    { id: "d.Acute_hepatitis_E", label: "d.Acute hepatitis E" },
                                ],
                            },
                            {
                                id: "9.Parasitic_and_vector_diseases",
                                label: "9.Parasitic and vector diseases",
                                children: [
                                    { id: "a.Malaria", label: "a.Malaria" },
                                    { id: "b.Trypanosomiasis", label: "b.Trypanosomiasis" },
                                    { id: "c.Chagas_disease", label: "c.Chagas disease" },
                                    { id: "d.Schistosomiasis", label: "d.Schistosomiasis" },
                                    { id: "e.Leishmaniasis", label: "e.Leishmaniasis" },
                                    {
                                        id: "f.lymphatic_filariasis",
                                        label: "f.lymphatic filariasis",
                                    },
                                    { id: "g.Onchocerciasis", label: "g.Onchocerciasis" },
                                    { id: "h.Cysticercosis", label: "h.Cysticercosis" },
                                    { id: "i.Echinococcosis", label: "i.Echinococcosis" },
                                    { id: "j.Dengue", label: "j.Dengue" },
                                    { id: "k.Trachoma", label: "k.Trachoma" },
                                    { id: "l.Yellow_fever", label: "l.Yellow fever" },
                                    { id: "m.Rabies", label: "m.Rabies" },
                                ],
                            },
                            {
                                id: "10.Intestinal_nematode_infections",
                                label: "10.Intestinal nematode infections",
                                children: [
                                    { id: "a.Ascariasis", label: "a.Ascariasis" },
                                    { id: "b.Trichuriasis", label: "b.Trichuriasis" },
                                    { id: "c.Hookworm_disease", label: "c.Hookworm disease" },
                                    {
                                        id: "d.Food-borne_trematodes",
                                        label: "d.Food-borne trematodes",
                                    },
                                ],
                            },
                            { id: "11.Leprosy", label: "11.Leprosy", children: [] },
                            {
                                id: "12.Other_infectious_diseases",
                                label: "12.Other infectious diseases",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "B.Respiratory_Infectious_",
                        label: "B.Respiratory Infectious ",
                        children: [
                            {
                                id: "1.Lower_respiratory_infections",
                                label: "1.Lower respiratory infections",
                                children: [],
                            },
                            { id: "2.COVID-19", label: "2.COVID-19", children: [] },
                            {
                                id: "3.Upper_respiratory_infections",
                                label: "3.Upper respiratory infections",
                                children: [],
                            },
                            { id: "4.Otitis_media", label: "4.Otitis media", children: [] },
                        ],
                    },
                    {
                        id: "C.Maternal_conditions",
                        label: "C.Maternal conditions",
                        children: [],
                    },
                    {
                        id: "D.Neonatal_conditions",
                        label: "D.Neonatal conditions",
                        children: [
                            {
                                id: "1.Preterm_birth_complications",
                                label: "1.Preterm birth complications",
                                children: [],
                            },
                            {
                                id: "2.Birth_asphyxia_and_birth_trauma",
                                label: "2.Birth asphyxia and birth trauma",
                                children: [],
                            },
                            {
                                id: "3.Neonatal_sepsis_and_infections",
                                label: "3.Neonatal sepsis and infections",
                                children: [],
                            },
                            {
                                id: "4.Other_neonatal_conditions",
                                label: "4.Other neonatal conditions",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "E.Nutritional_deficiencies",
                        label: "E.Nutritional deficiencies",
                        children: [
                            {
                                id: "1.Protein-energy_malnutrition",
                                label: "1.Protein-energy malnutrition",
                                children: [],
                            },
                            {
                                id: "2.Iodine_deficiency",
                                label: "2.Iodine deficiency",
                                children: [],
                            },
                            {
                                id: "3.Vitamin_A_deficiency",
                                label: "3.Vitamin A deficiency",
                                children: [],
                            },
                            {
                                id: "4.Iron-deficiency_anaemia",
                                label: "4.Iron-deficiency anaemia",
                                children: [],
                            },
                            {
                                id: "5.Other_nutritional_deficiencies",
                                label: "5.Other nutritional deficiencies",
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: "II.Noncommunicable_diseases",
                label: "II.Noncommunicable diseases",
                children: [
                    {
                        id: "A.Malignant_neoplasms",
                        label: "A.Malignant neoplasms",
                        children: [
                            {
                                id: "1.Mouth_and_oropharynx_cancers",
                                label: "1.Mouth and oropharynx cancers",
                                children: [
                                    {
                                        id: "a.Lip_and_oral_cavity",
                                        label: "a.Lip and oral cavity",
                                    },
                                    { id: "b.Nasopharynx", label: "b.Nasopharynx" },
                                    { id: "c.Other_pharynx", label: "c.Other pharynx" },
                                ],
                            },
                            {
                                id: "2.Oesophagus_cancer",
                                label: "2.Oesophagus cancer",
                                children: [],
                            },
                            {
                                id: "3.Stomach_cancer",
                                label: "3.Stomach cancer",
                                children: [],
                            },
                            {
                                id: "4.Colon_and_rectum_cancers",
                                label: "4.Colon and rectum cancers",
                                children: [],
                            },
                            {
                                id: "5.Liver_cancer",
                                label: "5.Liver cancer",
                                children: [
                                    {
                                        id: "a.Liver_cancer_secondary_to_hepatitis_B",
                                        label: "a.Liver cancer secondary to hepatitis B",
                                    },
                                    {
                                        id: "b.Liver_cancer_secondary_to_hepatitis_C",
                                        label: "b.Liver cancer secondary to hepatitis C",
                                    },
                                    {
                                        id: "c.Liver_cancer_secondary_to_alcohol_use",
                                        label: "c.Liver cancer secondary to alcohol use",
                                    },
                                    { id: "d.Other_liver_cancer", label: "d.Other liver cancer" },
                                ],
                            },
                            {
                                id: "6.Pancreas_cancer",
                                label: "6.Pancreas cancer",
                                children: [],
                            },
                            {
                                id: "7.Trachea,_bronchus,_lung_cancers",
                                label: "7.Trachea, bronchus, lung cancers",
                                children: [],
                            },
                            {
                                id: "8.Melanoma_and_other_skin_cancers",
                                label: "8.Melanoma and other skin cancers",
                                children: [
                                    {
                                        id: "a.Malignant_skin_melanoma",
                                        label: "a.Malignant skin melanoma",
                                    },
                                    {
                                        id: "b.Non-melanoma_skin_cancer",
                                        label: "b.Non-melanoma skin cancer",
                                    },
                                ],
                            },
                            { id: "9.Breast_cancer", label: "9.Breast cancer", children: [] },
                            {
                                id: "10.Cervix_uteri_cancer",
                                label: "10.Cervix uteri cancer",
                                children: [],
                            },
                            {
                                id: "11.Corpus_uteri_cancer",
                                label: "11.Corpus uteri cancer",
                                children: [],
                            },
                            { id: "12.Ovary_cancer", label: "12.Ovary cancer", children: [] },
                            {
                                id: "13.Prostate_cancer",
                                label: "13.Prostate cancer",
                                children: [],
                            },
                            {
                                id: "14.Testicular_cancer",
                                label: "14.Testicular cancer",
                                children: [],
                            },
                            {
                                id: "15.Kidney_cancer",
                                label: "15.Kidney cancer",
                                children: [],
                            },
                            {
                                id: "16.Bladder_cancer",
                                label: "16.Bladder cancer",
                                children: [],
                            },
                            {
                                id: "17.Brain_and_nervous_system_cancers",
                                label: "17.Brain and nervous system cancers",
                                children: [],
                            },
                            {
                                id: "18.Gallbladder_and_biliary_tract_cancer",
                                label: "18.Gallbladder and biliary tract cancer",
                                children: [],
                            },
                            {
                                id: "19.Larynx_cancer",
                                label: "19.Larynx cancer",
                                children: [],
                            },
                            {
                                id: "20.Thyroid_cancer",
                                label: "20.Thyroid cancer",
                                children: [],
                            },
                            { id: "21.Mesothelioma", label: "21.Mesothelioma", children: [] },
                            {
                                id: "22.Lymphomas,_multiple_myeloma",
                                label: "22.Lymphomas, multiple myeloma",
                                children: [
                                    { id: "a.Hodgkin_lymphoma", label: "a.Hodgkin lymphoma" },
                                    {
                                        id: "b.Non-Hodgkin_lymphoma",
                                        label: "b.Non-Hodgkin lymphoma",
                                    },
                                    { id: "c.Multiple_myeloma", label: "c.Multiple myeloma" },
                                ],
                            },
                            { id: "23.Leukaemia", label: "23.Leukaemia", children: [] },
                            {
                                id: "24.Other_malignant_neoplasms",
                                label: "24.Other malignant neoplasms",
                                children: [],
                            },
                        ],
                    },
                    { id: "B.Other_neoplasms", label: "B.Other neoplasms", children: [] },
                    {
                        id: "C.Diabetes_mellitus",
                        label: "C.Diabetes mellitus",
                        children: [],
                    },
                    {
                        id: "D.Endocrine,_blood,_immune_disorders",
                        label: "D.Endocrine, blood, immune disorders",
                        children: [
                            { id: "1.Thalassaemias", label: "1.Thalassaemias", children: [] },
                            {
                                id: "2.Sickle_cell_disorders_and_trait",
                                label: "2.Sickle cell disorders and trait",
                                children: [],
                            },
                            {
                                id: "3.Other_haemoglobinopathies_and_haemolytic_anaemias",
                                label: "3.Other haemoglobinopathies and haemolytic anaemias",
                                children: [],
                            },
                            {
                                id: "4.Other_endocrine,_blood_and_immune_disorders",
                                label: "4.Other endocrine, blood and immune disorders",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "E.Mental_and_substance_use_disorders",
                        label: "E.Mental and substance use disorders",
                        children: [
                            {
                                id: "1.Depressive_disorders",
                                label: "1.Depressive disorders",
                                children: [],
                            },
                            {
                                id: "2.Bipolar_disorder",
                                label: "2.Bipolar disorder",
                                children: [],
                            },
                            { id: "3.Schizophrenia", label: "3.Schizophrenia", children: [] },
                            {
                                id: "4.Alcohol_use_disorders",
                                label: "4.Alcohol use disorders",
                                children: [],
                            },
                            {
                                id: "5.Drug_use_disorders",
                                label: "5.Drug use disorders",
                                children: [
                                    {
                                        id: "a.Opioid_use_disorders",
                                        label: "a.Opioid use disorders",
                                    },
                                    {
                                        id: "b.Cocaine_use_disorders",
                                        label: "b.Cocaine use disorders",
                                    },
                                    {
                                        id: "c.Amphetamine_use_disorders",
                                        label: "c.Amphetamine use disorders",
                                    },
                                    {
                                        id: "d.Cannabis_use_disorders",
                                        label: "d.Cannabis use disorders",
                                    },
                                    {
                                        id: "e.Other_drug_use_disorders",
                                        label: "e.Other drug use disorders",
                                    },
                                ],
                            },
                            {
                                id: "6.Anxiety_disorders",
                                label: "6.Anxiety disorders",
                                children: [],
                            },
                            {
                                id: "7.Eating_disorders",
                                label: "7.Eating disorders",
                                children: [],
                            },
                            {
                                id: "8.Austism_and_Asperger_syndrome",
                                label: "8.Austism and Asperger syndrome",
                                children: [],
                            },
                            {
                                id: "9.Childhood_behavioural_disorders",
                                label: "9.Childhood behavioural disorders",
                                children: [
                                    {
                                        id: "a.Attention_deficit_hyperactivity_syndrome",
                                        label: "a.Attention deficit/hyperactivity syndrome",
                                    },
                                    { id: "b.Conduct_disorder", label: "b.Conduct disorder" },
                                ],
                            },
                            {
                                id: "10.Idiopathic_intellectual_disability",
                                label: "10.Idiopathic intellectual disability",
                                children: [],
                            },
                            {
                                id: "11.Other_mental_and_behavioural_disorders",
                                label: "11.Other mental and behavioural disorders",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "F.Neurological_conditions",
                        label: "F.Neurological conditions",
                        children: [
                            {
                                id: "1.Alzheimer_disease_and_other_dementias",
                                label: "1.Alzheimer disease and other dementias",
                                children: [],
                            },
                            {
                                id: "2.Parkinson_disease",
                                label: "2.Parkinson disease",
                                children: [],
                            },
                            { id: "3.Epilepsy", label: "3.Epilepsy", children: [] },
                            {
                                id: "4.Multiple_sclerosis",
                                label: "4.Multiple sclerosis",
                                children: [],
                            },
                            { id: "5.Migraine", label: "5.Migraine", children: [] },
                            {
                                id: "6.Non-migrane_headache",
                                label: "6.Non-migrane headache",
                                children: [],
                            },
                            {
                                id: "7.Other_neurological_conditions",
                                label: "7.Other neurological conditions",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "G.Sense_organ_diseases",
                        label: "G.Sense organ diseases",
                        children: [
                            { id: "1.Glaucoma", label: "1.Glaucoma", children: [] },
                            { id: "2.Cataracts", label: "2.Cataracts", children: [] },
                            {
                                id: "3.Uncorrected_refractive_errors",
                                label: "3.Uncorrected refractive errors",
                                children: [],
                            },
                            {
                                id: "4.Macular_degeneration",
                                label: "4.Macular degeneration",
                                children: [],
                            },
                            {
                                id: "5.Other_vision_loss",
                                label: "5.Other vision loss",
                                children: [],
                            },
                            {
                                id: "6.Other_hearing_loss",
                                label: "6.Other hearing loss",
                                children: [],
                            },
                            {
                                id: "7.Other_sense_organ_disorders",
                                label: "7.Other sense organ disorders",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "H.Cardiovascular_diseases",
                        label: "H.Cardiovascular diseases",
                        children: [
                            {
                                id: "1.Rheumatic_heart_disease",
                                label: "1.Rheumatic heart disease",
                                children: [],
                            },
                            {
                                id: "2.Hypertensive_heart_disease",
                                label: "2.Hypertensive heart disease",
                                children: [],
                            },
                            {
                                id: "3.Ischaemic_heart_disease",
                                label: "3.Ischaemic heart disease",
                                children: [],
                            },
                            {
                                id: "4.Stroke",
                                label: "4.Stroke",
                                children: [
                                    { id: "a.Ischaemic_stroke", label: "a.Ischaemic stroke" },
                                    {
                                        id: "b.Haemorrhagic_stroke",
                                        label: "b.Haemorrhagic stroke",
                                    },
                                ],
                            },
                            {
                                id: "5.Cardiomyopathy,_myocarditis,_endocarditis",
                                label: "5.Cardiomyopathy, myocarditis, endocarditis",
                                children: [],
                            },
                            {
                                id: "6.Other_circulatory_diseases",
                                label: "6.Other circulatory diseases",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "I.Respiratory_diseases",
                        label: "I.Respiratory diseases",
                        children: [
                            {
                                id: "1.Chronic_obstructive_pulmonary_disease",
                                label: "1.Chronic obstructive pulmonary disease",
                                children: [],
                            },
                            { id: "2.Asthma", label: "2.Asthma", children: [] },
                            {
                                id: "3.Other_respiratory_diseases",
                                label: "3.Other respiratory diseases",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "J.Digestive_diseases",
                        label: "J.Digestive diseases",
                        children: [
                            {
                                id: "1.Peptic_ulcer_disease",
                                label: "1.Peptic ulcer disease",
                                children: [],
                            },
                            {
                                id: "2.Cirrhosis_of_the_liver",
                                label: "2.Cirrhosis of the liver",
                                children: [
                                    {
                                        id: "a.Cirrhosis_due_to_hepatitis_B",
                                        label: "a.Cirrhosis due to hepatitis B",
                                    },
                                    {
                                        id: "b.Cirrhosis_due_to_hepatitis_C",
                                        label: "b.Cirrhosis due to hepatitis C",
                                    },
                                    {
                                        id: "c.Cirrhosis_due_to_alcohol_use",
                                        label: "c.Cirrhosis due to alcohol use",
                                    },
                                    {
                                        id: "d.Other_liver_cirrhosis",
                                        label: "d.Other liver cirrhosis",
                                    },
                                ],
                            },
                            { id: "3.Appendicitis", label: "3.Appendicitis", children: [] },
                            {
                                id: "4.Gastritis_and_duodenitis",
                                label: "4.Gastritis and duodenitis",
                                children: [],
                            },
                            {
                                id: "5.Paralytic_ileus_and_intestinal_obstruction",
                                label: "5.Paralytic ileus and intestinal obstruction",
                                children: [],
                            },
                            {
                                id: "6.Inflammatory_bowel_disease",
                                label: "6.Inflammatory bowel disease",
                                children: [],
                            },
                            {
                                id: "7.Gallbladder_and_biliary_diseases",
                                label: "7.Gallbladder and biliary diseases",
                                children: [],
                            },
                            { id: "8.Pancreatitis", label: "8.Pancreatitis", children: [] },
                            {
                                id: "9.Other_digestive_diseases",
                                label: "9.Other digestive diseases",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "K.Genitourinary_diseases",
                        label: "K.Genitourinary diseases",
                        children: [
                            {
                                id: "1.Kidney_diseases",
                                label: "1.Kidney diseases",
                                children: [
                                    {
                                        id: "a.Acute_glomerulonephritis",
                                        label: "a.Acute glomerulonephritis",
                                    },
                                    {
                                        id: "b.Chronic_kidney_disease_due_to_diabetes",
                                        label: "b.Chronic kidney disease due to diabetes",
                                    },
                                    {
                                        id: "c.Other_chronic_kidney_disease",
                                        label: "c.Other chronic kidney disease",
                                    },
                                ],
                            },
                            {
                                id: "2.Benign_prostatic_hyperplasia",
                                label: "2.Benign prostatic hyperplasia",
                                children: [],
                            },
                            { id: "3.Urolithiasis", label: "3.Urolithiasis", children: [] },
                            {
                                id: "4.Other_urinary_diseases",
                                label: "4.Other urinary diseases",
                                children: [],
                            },
                            { id: "5.Infertility", label: "5.Infertility", children: [] },
                            {
                                id: "6.Gynecological_diseases",
                                label: "6.Gynecological diseases",
                                children: [],
                            },
                        ],
                    },
                    { id: "L.Skin_diseases", label: "L.Skin diseases", children: [] },
                    {
                        id: "M.Musculoskeletal_diseases",
                        label: "M.Musculoskeletal diseases",
                        children: [
                            {
                                id: "1.Rheumatoid_arthritis",
                                label: "1.Rheumatoid arthritis",
                                children: [],
                            },
                            {
                                id: "2.Osteoarthritis",
                                label: "2.Osteoarthritis",
                                children: [],
                            },
                            { id: "3.Gout", label: "3.Gout", children: [] },
                            {
                                id: "4.Back_and_neck_pain",
                                label: "4.Back and neck pain",
                                children: [],
                            },
                            {
                                id: "5.Other_musculoskeletal_disorders",
                                label: "5.Other musculoskeletal disorders",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "N.Congenital_anomalies",
                        label: "N.Congenital anomalies",
                        children: [
                            {
                                id: "1.Neural_tube_defects",
                                label: "1.Neural tube defects",
                                children: [],
                            },
                            {
                                id: "2.Cleft_lip_and_cleft_palate",
                                label: "2.Cleft lip and cleft palate",
                                children: [],
                            },
                            { id: "3.Down_syndrome", label: "3.Down syndrome", children: [] },
                            {
                                id: "4.Congenital_heart_anomalies",
                                label: "4.Congenital heart anomalies",
                                children: [],
                            },
                            {
                                id: "5.Other_chromosomal_anomalies",
                                label: "5.Other chromosomal anomalies",
                                children: [],
                            },
                            {
                                id: "6.Other_congenital_anomalies",
                                label: "6.Other congenital anomalies",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "O.Oral_conditions",
                        label: "O.Oral conditions",
                        children: [
                            { id: "1.Dental_caries", label: "1.Dental caries", children: [] },
                            {
                                id: "2.Periodontal_disease",
                                label: "2.Periodontal disease",
                                children: [],
                            },
                            { id: "3.Edentulism", label: "3.Edentulism", children: [] },
                            {
                                id: "4.Other_oral_disorders",
                                label: "4.Other oral disorders",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "P.Sudden_infant_death_syndrome",
                        label: "P.Sudden infant death syndrome",
                        children: [],
                    },
                ],
            },
            {
                id: "III.Injuries",
                label: "III.Injuries",
                children: [
                    {
                        id: "A.Unintentional_injuries",
                        label: "A.Unintentional injuries",
                        children: [
                            { id: "1.Road_injury", label: "1.Road injury", children: [] },
                            { id: "2.Poisonings", label: "2.Poisonings", children: [] },
                            { id: "3.Falls", label: "3.Falls", children: [] },
                            {
                                id: "4.Fire,_heat_and_hot_substances",
                                label: "4.Fire, heat and hot substances",
                                children: [],
                            },
                            { id: "5.Drowning", label: "5.Drowning", children: [] },
                            {
                                id: "6.Exposure_to_mechanical_forces",
                                label: "6.Exposure to mechanical forces",
                                children: [],
                            },
                            {
                                id: "7.Natural_disasters",
                                label: "7.Natural disasters",
                                children: [],
                            },
                            {
                                id: "8.Other_unintentional_injuries",
                                label: "8.Other unintentional injuries",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "B.Intentional_injuries",
                        label: "B.Intentional injuries",
                        children: [
                            { id: "1.Self-harm", label: "1.Self-harm", children: [] },
                            {
                                id: "2.Interpersonal_violence",
                                label: "2.Interpersonal violence",
                                children: [],
                            },
                            {
                                id: "3.Collective_violence_and_legal_intervention",
                                label: "3.Collective violence and legal intervention",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "C.Other_COVID-19_pandemic-related_outcomes",
                        label: "C.Other\xa0COVID-19\xa0pandemic-related\xa0outcomes",
                        children: [],
                    },
                ],
            },
        ],
    },
];

interface TreeWithSelectionProps {
    selectedItem: string;
    onSelectedItemChange: (event: (React.SyntheticEvent|null), itemId: string, isSelected: boolean) => void;
}

export default function TreeSelection({
    selectedItem,
    onSelectedItemChange,
}: TreeWithSelectionProps) {
    const [expandedItems, setExpandedItems] = React.useState<string[]>(["All_Causes"]);
    const handleExpandedItemsChange = (_: (React.SyntheticEvent | null) , items: string[]) => {
        setExpandedItems(items);
    };
    return (
        <RichTreeView
            items={CAUSES_TREE}
            selectedItems={selectedItem}
            onItemSelectionToggle={onSelectedItemChange}
            expandedItems={expandedItems}
            onExpandedItemsChange={handleExpandedItemsChange}
        />
    );
}