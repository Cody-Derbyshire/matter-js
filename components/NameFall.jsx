import { useEffect, useRef } from 'react';

import {
  Engine,
  Render,
  Bodies,
  World,
  Svg,
  Runner,
  Body,
  Vertices,
  Matter,
  MouseConstraint,
  Mouse,
  Composite,
} from 'matter-js';
import '../components/CSS/NameFall.css';

const NameFall = () => {
  const scene = useRef();
  const isPressed = useRef(false);
  const engine = useRef(
    Engine.create(/* {
      enableSleeping: true,
    } */)
  );

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw - 32,
        height: ch - 10,
        wireframes: false,
        background: 'transparent',
      },
    });

    World.add(engine.current.world, [
      /* Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }), */
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

    engine.current.gravity.y = 0.5;

    const C =
      'M28.36,18.24a13.3,13.3,0,0,1-4.48,7.89q-3.52,3-9.42,3a16.79,16.79,0,0,1-5.7-.95,13.54,13.54,0,0,1-4.59-2.72,12.42,12.42,0,0,1-3.06-4.4,15.07,15.07,0,0,1-1.11-6v-.66a15.51,15.51,0,0,1,1.11-6A13.25,13.25,0,0,1,4.2,3.89,13.49,13.49,0,0,1,8.81,1a15.77,15.77,0,0,1,5.65-1,14.13,14.13,0,0,1,9.37,3,13.24,13.24,0,0,1,4.53,7.9l-6.9,1.78a7.2,7.2,0,0,0-2.11-4.23,6.79,6.79,0,0,0-5-1.78,7.34,7.34,0,0,0-2.84.56A7.06,7.06,0,0,0,9.17,8.81a7.62,7.62,0,0,0-1.58,2.51A8.86,8.86,0,0,0,7,14.62V15a8.45,8.45,0,0,0,.58,3.25,6.75,6.75,0,0,0,1.58,2.36A6.51,6.51,0,0,0,11.51,22a8.34,8.34,0,0,0,2.84.47,6.85,6.85,0,0,0,4.92-1.61,7.67,7.67,0,0,0,2.19-4.34Z';
    const O =
      'M27.52,8.2a13,13,0,0,0-3.17-4.47,13.73,13.73,0,0,0-2.66-1.9v12h0c0,.07,0,.13,0,.2v1.12a7.72,7.72,0,0,1-.59,3.08,6.92,6.92,0,0,1-1.58,2.31A7,7,0,0,1,17.18,22a8.29,8.29,0,0,1-5.67,0,7,7,0,0,1-2.34-1.45,6.92,6.92,0,0,1-1.58-2.31A7.72,7.72,0,0,1,7,15.13V14a7.76,7.76,0,0,1,.58-3.08A6.92,6.92,0,0,1,9.17,8.62a7,7,0,0,1,2.34-1.45,8.29,8.29,0,0,1,5.67,0,7,7,0,0,1,2.34,1.45,5.57,5.57,0,0,1,.5.59V1.05L19.77,1A16,16,0,0,0,8.92,1,13.51,13.51,0,0,0,4.34,3.73,13.15,13.15,0,0,0,1.17,8.2a14.79,14.79,0,0,0-1.17,6v.66A14.9,14.9,0,0,0,1.17,21a12.88,12.88,0,0,0,3.17,4.45,13.93,13.93,0,0,0,4.58,2.75,16,16,0,0,0,10.85,0,13.93,13.93,0,0,0,4.58-2.75A12.75,12.75,0,0,0,27.52,21a14.9,14.9,0,0,0,1.17-6.09v-.66A14.79,14.79,0,0,0,27.52,8.2Z';
    const D =
      'M21.69,0V25.47a7.52,7.52,0,0,1-2,5.47A7.1,7.1,0,0,1,14.35,33,7.18,7.18,0,0,1,9,31a7.45,7.45,0,0,1-2-5.53V24.8a7.43,7.43,0,0,1,2-5.53,7.14,7.14,0,0,1,5.31-2,7.1,7.1,0,0,1,5.31,2.08q.19.21.36.42V14.2a8.09,8.09,0,0,0-2.39-2.38,9.65,9.65,0,0,0-5.29-1.26,12.17,12.17,0,0,0-4.75.95,11.5,11.5,0,0,0-3.95,2.75A13.09,13.09,0,0,0,1,18.68a17,17,0,0,0-1,5.95v1a18.11,18.11,0,0,0,.92,6,12.64,12.64,0,0,0,2.56,4.42,10.71,10.71,0,0,0,3.83,2.72,12.09,12.09,0,0,0,4.76.92,13.09,13.09,0,0,0,3.42-.39,8.8,8.8,0,0,0,2.44-1.05,6.52,6.52,0,0,0,1.67-1.53,10.87,10.87,0,0,0,1.09-1.81h1v4h7V0Z';
    const Y =
      'M18.68,0h7V34.36a4.28,4.28,0,0,1-1.2,3.12,4.12,4.12,0,0,1-3.08,1.22H5V32H17.18c1,0,1.5-.56,1.5-1.67V23.58h-1q-1.83,4.79-7.89,4.78A10.73,10.73,0,0,1,6,27.69a8.19,8.19,0,0,1-3.11-2.06A9.58,9.58,0,0,1,.75,22.16,14.54,14.54,0,0,1,0,17.24V0H7V15.79A6.86,6.86,0,0,0,8.4,20.38,5.15,5.15,0,0,0,12.57,22a5.35,5.35,0,0,0,4.64-2,9.26,9.26,0,0,0,1.47-5.53Z';
    const E =
      'M27.47,13.12a13.94,13.94,0,0,0-.78-4.47,12.38,12.38,0,0,0-2.45-4.23A13.13,13.13,0,0,0,20,1.25,13.89,13.89,0,0,0,13.9,0,14.17,14.17,0,0,0,8.48,1,13.58,13.58,0,0,0,4.06,3.89a13.33,13.33,0,0,0-3,4.45A15,15,0,0,0,0,14.12v.34a17.28,17.28,0,0,0,1,6.17,12.92,12.92,0,0,0,2.89,4.61,12.5,12.5,0,0,0,4.42,2.9,15.63,15.63,0,0,0,5.67,1,16.88,16.88,0,0,0,4.76-.61A12.89,12.89,0,0,0,22.21,27a9.62,9.62,0,0,0,2.31-2.09,12,12,0,0,0,1.39-2.19l-6-3.34a5.52,5.52,0,0,1-2,2.2,7.27,7.27,0,0,1-4,.91,7.58,7.58,0,0,1-2.53-.41,6.87,6.87,0,0,1-2.11-1.17,5.4,5.4,0,0,1-2-4c-.49-5.52.33-6.64.33-6.64v0A6.35,6.35,0,0,1,9.51,7.7a6.63,6.63,0,0,1,4.34-1.36,7.34,7.34,0,0,1,4.42,1.28,5,5,0,0,1,2.08,3.22H10.15v6H27.47Z';
    const R =
      'M.67.78H12.34v4h1A6.63,6.63,0,0,1,16,1.25,7.85,7.85,0,0,1,20.46,0a8.77,8.77,0,0,1,6.62,2.59q2.51,2.58,2.5,7.86v1.23l-7.23.66v-.77a5.47,5.47,0,0,0-1.16-3.65,4.4,4.4,0,0,0-3.51-1.36A4.53,4.53,0,0,0,14,8.17a7.09,7.09,0,0,0-1.33,4.62v8.9H19v6.67H0V21.69H5.67V7.45h-5Z';
    const B =
      'M27.72,18.68a13.65,13.65,0,0,0-2.61-4.42,11.17,11.17,0,0,0-3.84-2.75,11.64,11.64,0,0,0-4.64-.95,10.43,10.43,0,0,0-5.4,1.26,7.7,7.7,0,0,0-1.62,1.27V18.8a7.24,7.24,0,0,1,4.74-1.56,7.18,7.18,0,0,1,5.31,2,7.47,7.47,0,0,1,2,5.53v.67a7.49,7.49,0,0,1-2,5.53,7.22,7.22,0,0,1-5.31,2A7.07,7.07,0,0,1,9,30.94a7.48,7.48,0,0,1-2-5.47V0H0V38.92H7v-4H8A11.52,11.52,0,0,0,9.2,36.73a7.58,7.58,0,0,0,1.73,1.53,8.8,8.8,0,0,0,2.42,1.05,12.19,12.19,0,0,0,3.28.39,12,12,0,0,0,4.75-.92,10.55,10.55,0,0,0,3.81-2.72,13.46,13.46,0,0,0,2.56-4.42,17.6,17.6,0,0,0,.94-6v-1A17,17,0,0,0,27.72,18.68Z';
    const S =
      'M8.12,8.56a2,2,0,0,0,1.39,1.92,19.92,19.92,0,0,0,5.06,1A13.24,13.24,0,0,1,21.46,14a7,7,0,0,1,2.67,5.82v.33a8,8,0,0,1-3,6.56q-3,2.44-8.45,2.45a16,16,0,0,1-5.51-.84,12.56,12.56,0,0,1-3.78-2.08,9.37,9.37,0,0,1-2.31-2.78,10.78,10.78,0,0,1-1.08-3l6.45-2.11a6.35,6.35,0,0,0,1.86,3.11,6.19,6.19,0,0,0,4.37,1.34A5.77,5.77,0,0,0,16.26,22a2.29,2.29,0,0,0,1-1.75,2.27,2.27,0,0,0-.25-1,2.62,2.62,0,0,0-.92-.89,6.11,6.11,0,0,0-1.81-.69,19.85,19.85,0,0,0-2.86-.45A14.25,14.25,0,0,1,4,14.76a6.94,6.94,0,0,1-2.76-6V8.45a7.18,7.18,0,0,1,.89-3.61A8.57,8.57,0,0,1,4.45,2.2,10.16,10.16,0,0,1,7.78.56,13.77,13.77,0,0,1,11.68,0a14.27,14.27,0,0,1,4.53.64,10.92,10.92,0,0,1,3.25,1.67,9.51,9.51,0,0,1,2.17,2.28A12.11,12.11,0,0,1,22.91,7L16.57,9.56A4.59,4.59,0,0,0,14.85,7.2a5.44,5.44,0,0,0-3.17-.86A4.53,4.53,0,0,0,9,7,1.87,1.87,0,0,0,8.12,8.56Z';
    const H =
      'M7,38.92H0V0H7V15.79H8a8.38,8.38,0,0,1,3.11-3.86,9,9,0,0,1,5.06-1.37,10.5,10.5,0,0,1,3.78.67,8.24,8.24,0,0,1,3,2,9.25,9.25,0,0,1,2,3.42,15.1,15.1,0,0,1,.72,4.92V38.92h-7V23.24a7,7,0,0,0-1.41-4.64,5,5,0,0,0-4.09-1.7A5.36,5.36,0,0,0,8.54,19,9.24,9.24,0,0,0,7,24.58Z';
    const I =
      'M16.35,30.71V9.8h-.88a5.35,5.35,0,0,0,1-.76,4.87,4.87,0,0,0,1.14-1.67,5.24,5.24,0,0,0,.42-2.09,5.19,5.19,0,0,0-.42-2.08,4.77,4.77,0,0,0-1.14-1.67A5.63,5.63,0,0,0,14.82.42a5.09,5.09,0,0,0-2-.42,5,5,0,0,0-2.06.42A5.8,5.8,0,0,0,9.06,1.53,5.05,5.05,0,0,0,7.92,3.2a5.51,5.51,0,0,0,0,4.17A5.16,5.16,0,0,0,9.06,9a6,6,0,0,0,1,.76H.67v6.67H9.34V30.71H0v6.67H24.35V30.71Z';

    const toVertices = (path) => {
      const pathEl = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      pathEl.setAttribute('d', path);
      return Svg.pathToVertices(pathEl, 2);
    };

    const toBody = function (letter) {
      const vertices = toVertices(letter);

      return Bodies.fromVertices(
        0,
        0,
        Vertices.scale(vertices, cw / 450, ch / 450),
        {
          friction: 0.1,
          frictionAir: 0.0001,
          restitution: 0.8,
          isStatic: true,

          render: {
            fillStyle: '#fff',
            strokeStyle: '#fff',
            lineWidth: 1,
          },
        },
        true
      );
    };

    const bodiesFirst = [toBody(C), toBody(O), toBody(D), toBody(Y)];
    const bodiesSecond = [
      toBody(D),
      toBody(E),
      toBody(R),
      toBody(B),
      toBody(Y),
      toBody(S),
      toBody(H),
      toBody(I),
      toBody(R),
      toBody(E),
    ];

    bodiesSecond.forEach((body) => {
      World.add(engine.current.world, body);
    });
    bodiesFirst.forEach((body) => {
      World.add(engine.current.world, body);
    });

    const positionLeftBodies = () => {
      let secondLeftY = 200;
      let secondLeftX = 50;
      let firstLeftY = 75;
      let firstLeftX = 50;
      bodiesSecond.forEach((body) => {
        Body.setPosition(body, {
          x: secondLeftX,
          y: secondLeftY,
        });
        // Important to not have any "left-over" movement.
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngle(body, 0);

        secondLeftX += 80;
      });
      bodiesFirst.forEach((body) => {
        Body.setPosition(body, {
          x: firstLeftX,
          y: firstLeftY,
        });

        // Important to not have any "left-over" movement.
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngle(body, 0);
        firstLeftX += 80;
      });
    };

    /* var mouseConstraint = MouseConstraint.create(engine.current.world, {
      //Create Constraint
      element: document.querySelector('#left'),
      constraint: {
        render: {
          visible: false,
        },
        stiffness: 0.8,
      },
    });

    Composite.add(engine.current.world, mouseConstraint); */

    const fallDown = () => {
      bodiesSecond.forEach((body) => {
        Body.setStatic(body, false);
      });
      bodiesFirst.forEach((body) => {
        Body.setStatic(body, false);
      });
    };

    const rcReset = () => {
      bodiesSecond.forEach((body) => {
        Body.setStatic(body, true);
      });
      bodiesFirst.forEach((body) => {
        Body.setStatic(body, true);
      });
      positionLeftBodies();
    };

    window.addEventListener('click', () => fallDown());

    window.addEventListener('contextmenu', () => rcReset());

    positionLeftBodies();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  /*  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = MouseConstraint.create(engine.current.world, {
        //Create Constraint
        element: scene.current,
        constraint: {
          render: {
            visible: true,
          },
          stiffness: 0.2,
        },
      });
      World.add(engine.current.world, ball);
    }
  }; */

  return (
    <>
      <div
        className='drop-wrapper'
        ref={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
};

export default NameFall;