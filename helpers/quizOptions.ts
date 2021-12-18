import { IQuiz } from '../ts/interfaces';

export default function quizOptions(): IQuiz[] {
  return [
    {
      id: 0,
      label: 'Które zdanie najlepiej do ciebie pasuje:',
      options: [
        {
          id: '0_opt_1',
          optionValue: 0,
          optionLabel: 'Nie przepadam za ryzykiem, wolę bezpieczne rozwiązania',
          selected: false
        },
        {
          id: '0_opt_2',
          optionValue: 1,
          optionLabel: 'Lubię mieć grunt pod nogami, a czasem zaszaleć',
          selected: false
        },
        {
          id: '0_opt_3',
          optionValue: 2,
          optionLabel:
            'Nie interesują mnie bezpieczne rozwiązania, kto nie ryzykuje ten nie pije szampana',
          selected: false
        }
      ]
    },
    {
      id: 1,
      label: 'Chce prowadzić szkolenia:',
      options: [
        {
          id: '1_opt_1',
          optionValue: 0,
          optionLabel: 'Wg określonego scenariusza, żeby nie popełniać błędów ',
          selected: false
        },
        {
          id: '1_opt_2',
          optionValue: 1,
          optionLabel: 'Wg swojego własnego scenariusza, gdzie mam wpływ na większość rzeczy',
          selected: false
        },
        {
          id: '1_opt_3',
          optionValue: 2,
          optionLabel: 'Scenariusz? Nie potrzebuję!',
          selected: false
        }
      ]
    },
    {
      id: 2,
      label: 'Lubię, kiedy:',
      options: [
        {
          id: '2_opt_1',
          optionValue: 0,
          optionLabel: 'Wypłata wpływa co miesiąc na moje konto, określonego dnia',
          selected: false
        },
        {
          id: '2_opt_2',
          optionValue: 1,
          optionLabel: 'Mam stałe źródła zleceń',
          selected: false
        },
        {
          id: '2_opt_3',
          optionValue: 3,
          optionLabel: 'Sam decyduje o tym, ile zarabiam',
          selected: false
        }
      ]
    }
  ];
}
