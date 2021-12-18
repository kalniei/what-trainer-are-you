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
    },
    {
      id: 3,
      label: 'Sprzedawanie własnych szkoleń',
      options: [
        {
          id: '3_opt_1',
          optionValue: -1,
          optionLabel: 'Nie wchodzi w grę',
          selected: false
        },
        {
          id: '3_opt_2',
          optionValue: 1,
          optionLabel: 'Niechętnie, ale dam radę',
          selected: false
        },
        {
          id: '3_opt_3',
          optionValue: 2,
          optionLabel: 'Jasne, że tak',
          selected: false
        }
      ]
    },
    {
      id: 4,
      label: 'Chcę:',
      options: [
        {
          id: '4_opt_1',
          optionValue: 0,
          optionLabel: 'Robić podobne szkolenia, żeby dojść do perfekcji',
          selected: false
        },
        {
          id: '4_opt_2',
          optionValue: 1,
          optionLabel: 'Mieć określony zasób szkoleń na potrzeby klienta',
          selected: false
        },
        {
          id: '4_opt_3',
          optionValue: 2,
          optionLabel: 'Robić ciągle nowe, niezwykłe rzeczy',
          selected: false
        }
      ]
    },
    {
      id: 5,
      label: 'Ewaluacja szkolenia',
      options: [
        {
          id: '5_opt_1',
          optionValue: 0,
          optionLabel: 'Jest super ważna i potrzebna',
          selected: false
        },
        {
          id: '5_opt_2',
          optionValue: 1,
          optionLabel: 'Może być pomocna trenerowi',
          selected: false
        },
        {
          id: '5_opt_3',
          optionValue: 2,
          optionLabel: 'Jest stratą czasu',
          selected: false
        }
      ]
    },
    {
      id: 6,
      label: 'Mój pracodawca:',
      options: [
        {
          id: '6_opt_1',
          optionValue: -1,
          optionLabel: 'Powinien zarabiać więcej niż ja, bo daje mi pracę',
          selected: false
        },
        {
          id: '6_opt_2',
          optionValue: 1,
          optionLabel: 'Może zarabiać na moich szkoleniach, bo załatwił zlecenie',
          selected: false
        },
        {
          id: '6_opt_3',
          optionValue: 3,
          optionLabel: 'Pracodawca? Chyba żartujesz',
          selected: false
        }
      ]
    },
    {
      id: 7,
      label: 'Aktywność w social mediach:',
      options: [
        {
          id: '7_opt_1',
          optionValue: 0,
          optionLabel: 'To nie moja bajka',
          selected: false
        },
        {
          id: '7_opt_2',
          optionValue: 1,
          optionLabel: 'Nie przepadam, ale mogę co nieco napisać',
          selected: false
        },
        {
          id: '7_opt_3',
          optionValue: 2,
          optionLabel: 'To podstawa sukcesu',
          selected: false
        }
      ]
    },
    {
      id: 8,
      label: 'Podróż trenera po Polsce',
      options: [
        {
          id: '8_opt_1',
          optionValue: -1,
          optionLabel: 'To bardzo męczące. Wolę pracować blisko domu',
          selected: false
        },
        {
          id: '8_opt_2',
          optionValue: 1,
          optionLabel: 'Są ok byle nie w nadmiarze',
          selected: false
        },
        {
          id: '8_opt_3',
          optionValue: 2,
          optionLabel: 'No limit!',
          selected: false
        }
      ]
    }
  ];
}
