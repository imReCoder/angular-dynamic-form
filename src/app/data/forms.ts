import { FormOption } from '../interfaces/dynamic-form.interface';

export const DYNAMIC_FORM_DATA: FormOption[] = [
  {
    value: 'createVm',
    label: 'Create VM',
    fields: [
      {
        type: 'text',
        label: 'VM Name',
        name: 'vmName',
        validators: {
          required: true,
          minlength: 3,
          maxlength: 10,
        },
      },
      {
        type: 'select',
        label: 'OS Type',
        name: 'osType',
        options: ['Windows', 'Linux', 'macOS'],
        defaultValue: 'Linux',
        validators: {
          required: true,
          minlength: 3,
        },
      },
      {
        type: 'number',
        label: 'CPU Cores',
        name: 'cpuCores',
        defaultValue: 4,
        validators: {
          required: true,
          max: 10,
        },
      },
      {
        type: 'number',
        label: 'RAM (GB)',
        name: 'ram',
        defaultValue: 1024,
        validators: {
          required: true,
          max: 640000,
          min: 1024,
        },
      },
      {
        type: 'text',
        label: 'user.email',
        name: 'user.config.email',
        validators: {
          required: true,
          email: true,
        },
      },
      {
        type: 'text',
        label: 'user.password',
        name: 'user.password',
        nested: 'user.password',
      },
      {
        type: 'text',
        label: 'user.config.timeout',
        name: 'user.config.timeout',
        nested: 'user.config.timeout',
      },
    ],
  },
  {
    value: 'createStorage',
    label: 'Create Storage',
    fields: [
      {
        type: 'text',
        label: 'Storage Name',
        name: 'storageName',
      },
      { type: 'number', label: 'Capacity (GB)', name: 'capacity' },
      {
        type: 'select',
        label: 'Storage Type',
        name: 'storageType',
        options: ['SSD', 'HDD'],
      },
      { type: 'text', label: 'Location', name: 'location' },
      {
        type: 'multiple',
        max: 3,
        label: 'Labels',
        name: 'labels',
        validators: {
          minlength: 5,
        },
      },
      {
        type: 'multiple',
        max: 3,
        label: 'Categories',
        name: 'category',
        validators: {
          minlength: 5,
        },
      },
    ],
  },
];
