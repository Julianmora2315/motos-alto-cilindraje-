import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    // Creamos el formulario con validaciones
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Acceso rápido a los controles del formulario
  get f(): any {
    return this.contactForm.controls;
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar(): void {
    // Marcar todos los campos como tocados para mostrar errores
    this.contactForm.markAllAsTouched();

    // Si el formulario es inválido, no continuar
    if (this.contactForm.invalid) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    this.submitting = true;

    // Preparar los datos
    const payload = {
      nombre: (this.f.nombre.value || '').toString().trim(),
      email: (this.f.email.value || '').toString().trim(),
      asunto: (this.f.asunto.value || '').toString().trim(),
      mensaje: (this.f.mensaje.value || '').toString().trim(),
      createdAt: new Date().toISOString()
    };

    try {
      // Descargar el JSON
      const text = JSON.stringify(payload, null, 2);
      const blob = new Blob([text], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `contacto_${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      alert('¡Mensaje enviado! Se ha descargado el archivo.');
      this.contactForm.reset();
    } catch (err) {
      console.error('Error al descargar JSON:', err);
      alert('No fue posible descargar el archivo.');
    } finally {
      this.submitting = false;
    }
  }
}