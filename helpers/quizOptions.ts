export default function quizOptions() {
  return [
    {
      no: '1',
      label: 'Które zdanie najlepiej do ciebie pasuje:',
      options: [
        {
          optionValue: 0,
          optionLabel: 'Nie przepadam za ryzykiem, wolę bezpieczne rozwiązania',
          selected: false
        },
        {
          optionValue: 1,
          optionLabel: 'Lubię mieć grunt pod nogami, a czasem zaszaleć',
          selected: false
        },
        {
          optionValue: 2,
          optionLabel:
            'Nie interesują mnie bezpieczne rozwiązania, kto nie ryzykuje ten nie pije szampana',
          selected: false
        }
      ]
    },
    {
      no: '2',
      label: 'Chce prowadzić szkolenia:',
      options: [
        {
          optionValue: 0,
          optionLabel: 'Wg określonego scenariusza, żeby nie popełniać błędów ',
          selected: false
        },
        {
          optionValue: 1,
          optionLabel: 'Wg swojego własnego scenariusza, gdzie mam wpływ na większość rzeczy',
          selected: false
        },
        {
          optionValue: 2,
          optionLabel: 'Scenariusz? Nie potrzebuję!',
          selected: false
        }
      ]
    }
  ];
}
